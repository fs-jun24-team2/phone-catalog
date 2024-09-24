import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useLocation } from 'react-router-dom';

import { loadProductsAsync } from '@/features/productsSlice';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { SortAndPaginationPanel } from './SortAndPagination/SortAndPagination';
import { Pagination } from '../shared/components/Pagination';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductsList } from './ProductsList';
import { VirtualAssistant } from '../VirtualAssistant';

import original_notFound from '/images/original/notFound/original-notFound.png';
import styles from './ProductsPage.module.scss';

import cn from 'classnames';

export const ProductsPage = () => {
  const [title, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products);
  const location = useLocation();
  const productsCategory = location.pathname.slice(1) as ProductsCategory;

  const productList = Object.values(products[productsCategory]);
  const totalItems = productList.length;

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    setTitle(productsCategory);
    if (!Object.keys(products[productsCategory]).length) {
      dispatch(loadProductsAsync(ProductsCategory[productsCategory]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    localStorage.setItem('currentPage', '1');
  };

  const filteredProducts = productList.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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
          products={Object.values(products[productsCategory])}
        />
      </div>

      <div className={styles['product-page__sort-optinal']}>
        <label>Items per page:</label>
        <select
          value={itemsPerPage}
          onChange={e => handleItemsPerPageChange(Number(e.target.value))}
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className={styles['product-page__products-list']}>
          <ProductsList
            products={paginatedProducts}
            category={productsCategory}
          />
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div className={styles.notfound}>
          <img src={original_notFound} alt="Product not found" />
        </div>
      )}
      <VirtualAssistant onSearch={setSearchTerm} />
    </>
  );
};
