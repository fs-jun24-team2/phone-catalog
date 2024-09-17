import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useLocation } from 'react-router-dom';

import { loadProductsAsync } from '@/features/productsSlice';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { FiltersPanel } from '../shared/components/FiltersPanel';
import { Pagination } from '../shared/components/Pagination';

import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductsList } from './ProductsList';

// import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products);
  const location = useLocation();
  const productsCategory = location.pathname.slice(1) as ProductsCategory;
  const productAmount = Object.keys(products[productsCategory]).length;

  useEffect(() => {
    setTitle(productsCategory);
    if (!Object.keys(products[productsCategory]).length) {
      dispatch(loadProductsAsync(ProductsCategory[productsCategory]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div style={{ paddingTop: '100px' }}>
      <Breadcrumbs />
      <h1>{title}</h1>
      <p>{productAmount} models</p>
      <FiltersPanel />
      <ProductsList products={products[productsCategory]} />
      <Pagination />
    </div>
  );
};
