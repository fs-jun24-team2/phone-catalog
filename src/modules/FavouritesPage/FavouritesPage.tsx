// import styles from './FavouritesPage.module.scss';

import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { Pagination } from '../shared/components/Pagination';
import { ProductsList } from '../shared/components/ProductsList';

export const FavouritesPage = () => {
  return (
    <>
      <Breadcrumbs />
      <h1>Favourites</h1>
      <p>5 items</p>
      <ProductsList />

      {/* Pagination is questionable */}
      <Pagination />
    </>
  );
};
