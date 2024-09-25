import { useEffect, useState } from 'react';
import { useAppSelector } from '@/app/hooks';
import { useLocation } from 'react-router-dom';

import { selectProductsLoading } from '@/features/productsSlice';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { SortAndPaginationPanel } from './SortAndPagination/SortAndPagination';
import { Pagination } from '../shared/components/Pagination';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductsList } from './ProductsList';
import { VirtualAssistant } from '../VirtualAssistant';

import original_notFound from '/images/original/notFound/original-notFound.png';
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
  }, [location, productsCategory]);

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <div className={styles['product-page__breadcrumbs']}>
        <Breadcrumbs />
      </div>

      <div className={styles['product-page__header']}>
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
      </div>

      <div className={styles['product-page__sort-panel']}>
        <SortAndPaginationPanel
          onHandleItemPerPage={handleItemsPerPageChange}
          totalItems={totalItems}
        />
      </div>

      {!!filteredProducts.length && (
        <div className={styles['product-page__products-list']}>
          <ProductsList
            products={paginatedProducts}
            category={productsCategory}
          />

          {totalPages > 1 && (
            <Pagination
              totalItems={filteredProducts.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}

      {!filteredProducts.length && !isLoading && (
        <div className={styles.notfound}>
          <img src={original_notFound} alt="Product not found" />
        </div>
      )}
      <VirtualAssistant onSearch={setSearchTerm} />
    </>
  );
};
