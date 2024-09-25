import { useEffect, useState } from 'react';
import { useAppSelector } from '@/app/hooks';
import { useLocation } from 'react-router-dom';

import { BreadcrumbsSkeleton } from '../shared/components/Skeletons/BreadcrumbsSkeleton';
import { TitleSkeleton } from '../shared/components/Skeletons/TitleSkeleton';
import { SortPanelSkeleton } from '../shared/components/Skeletons/SortPanelSkeleton';
// import { ProductCardSkeleton } from '../shared/components/Skeletons/ProductCardSkeleton';
import { PaginationSkeleton } from '../shared/components/Skeletons/PaginationSkeleton';

import { selectProductsLoading } from '@/features/productsSlice';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { SortAndPaginationPanel } from './SortAndPagination/SortAndPagination';
import { Pagination } from '../shared/components/Pagination';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductsList } from './ProductsList';
import { VirtualAssistant } from '../VirtualAssistant';

// import original_notFound from '/images/original/notFound/original-notFound.png';
import styles from './ProductsPage.module.scss';
import { useFilteredProducts } from '@/hooks/useFilteredProduct';
import { selectAggregateLoading } from '@/features/aggregateSlice';

import cn from 'classnames';
import { SearchParamsType } from '@/types/SearchParamsType';

export const ProductsPage = () => {
  const [title, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [isDelayedLoading, setIsDelayedLoading] = useState(true);
  const products = useAppSelector(state => state.products);
  const location = useLocation();
  const productsCategory = location.pathname.slice(1) as ProductsCategory;
  const isProductsLoading = useAppSelector(selectProductsLoading);
  const isAggregatesLoading = useAppSelector(selectAggregateLoading);
  const isLoading = isProductsLoading || isAggregatesLoading;

  const productList = Object.values(products[productsCategory]);
  const totalItems = productList.length;

  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get(SearchParamsType.query);

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    setTitle(productsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayedLoading(false);
    }, 800); //            це затримка щоб було видно скелет

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newSearchTerm = searchQuery ? searchQuery : '';

    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    localStorage.setItem('currentPage', '1');
  };

  const filteredProducts = useFilteredProducts(productList, { searchTerm });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <div className={styles['product-page__breadcrumbs']}>
        {isDelayedLoading || isLoading ? (
          <BreadcrumbsSkeleton />
        ) : (
          <Breadcrumbs />
        )}
      </div>

      <div className={styles['product-page__header']}>
        {isDelayedLoading || isLoading ? (
          <TitleSkeleton />
        ) : (
          <>
            <h1 className={cn('style-h1', styles['product-page__title'])}>
              {title}
            </h1>
            <p
              className={cn(
                'style-buttons-text',
                styles['product-page__product-amount'],
              )}
            >
              {totalItems} models
            </p>
          </>
        )}
      </div>

      <div className={styles['product-page__sort-panel']}>
        {isDelayedLoading || isLoading ? (
          <SortPanelSkeleton />
        ) : (
          <SortAndPaginationPanel
            onHandleItemPerPage={handleItemsPerPageChange}
          />
        )}
      </div>
      <div className={styles['product-page__products-list']}>
        <ProductsList
          products={paginatedProducts}
          category={productsCategory}
          isLoading={isLoading}
        />
      </div>

      {isDelayedLoading || isLoading ? (
        <PaginationSkeleton />
      ) : (
        <>
          {filteredProducts.length ? (
            <div className={styles['product-page__products-list']}>
              <Pagination
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            isLoading && null
            // <div className={styles.notfound}>
            //   <img src={original_notFound} alt="Product not found" />
            // </div>
          )}
        </>
      )}

      {!isLoading && <VirtualAssistant onSearch={setSearchTerm} />}
    </>
  );
};
