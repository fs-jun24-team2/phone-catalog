import { useEffect, useState } from 'react';
import { useAppSelector } from '@/app/hooks';
import { useLocation } from 'react-router-dom';

import { BreadcrumbsSkeleton } from '../shared/components/Skeletons/BreadcrumbsSkeleton';
import { TitleSkeleton } from '../shared/components/Skeletons/TitleSkeleton';
import { SortPanelSkeleton } from '../shared/components/Skeletons/SortPanelSkeleton';
import { PaginationSkeleton } from '../shared/components/Skeletons/PaginationSkeleton';

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
import { useTranslation } from 'react-i18next';
import { getProductPageTitle } from './helpers/getProductPageTitle';
import { scrollToTop } from '../shared/helpers/scrollToTop';

export const ProductsPage = () => {
  const { t } = useTranslation();
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

  const query = new URLSearchParams(location.search);
  const searchQuery = query.get(SearchParamsType.query);

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    const newTitle = getProductPageTitle(productsCategory);

    setTitle(t(newTitle));
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, t]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayedLoading(false);
    }, 700);

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  });

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
            <h1
              className={cn('style-h1', styles['product-page__title'], {
                [styles['product-page__title-dark']]: isDarkTheme,
              })}
            >
              {title}
            </h1>
            <p
              className={cn(
                'style-buttons-text',
                styles['product-page__product-amount'],
              )}
            >
              {totalItems} {t('models')}
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
            totalItems={totalItems}
          />
        )}
      </div>

      {!!filteredProducts.length && (
        <div className={styles['product-page__products-list']}>
          <ProductsList
            products={paginatedProducts}
            category={productsCategory}
            isLoading={isLoading}
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

      {!filteredProducts.length && isDelayedLoading ? (
        <PaginationSkeleton />
      ) : (
        !isLoading && <VirtualAssistant onSearch={setSearchTerm} />
      )}
    </>
  );
};
