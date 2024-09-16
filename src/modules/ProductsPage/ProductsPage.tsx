import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { FiltersPanel } from '../shared/components/FiltersPanel';
import { Pagination } from '../shared/components/Pagination';
import { ProductsList } from '../shared/components/ProductsList';
// import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  return (
    <>
      <Breadcrumbs />
      <h1>Phones/Tablets/Accessories page</h1>
      <p>95 models</p>
      <FiltersPanel />
      <ProductsList />
      <Pagination />
    </>
  );
};
