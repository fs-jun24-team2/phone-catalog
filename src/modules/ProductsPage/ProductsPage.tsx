import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useLocation } from 'react-router-dom';

import { loadProductsAsync } from '@/features/productsSlice';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { SortAndPaginationPanel } from './SortAndPagination/SortAndPagination';
import { ProductsCategory } from '@/types/ProductsCategory';
import { ProductsList } from './ProductsList';

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
  }, [location, productsCategory, dispatch, products]);

  return (
    <div style={{ paddingTop: '100px' }}>
      <Breadcrumbs />
      <h1>{title}</h1>
      <p>{productAmount} models</p>
      <SortAndPaginationPanel
        products={Object.values(products[productsCategory])}
      />
      <ProductsList
        products={products[productsCategory]}
        category={productsCategory}
      />
    </div>
  );
};
