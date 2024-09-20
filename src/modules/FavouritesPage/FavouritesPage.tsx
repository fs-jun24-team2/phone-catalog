// import styles from './FavouritesPage.module.scss';

import { Breadcrumbs } from '../shared/components/Breadcrumbs';
import { Pagination } from '../shared/components/Pagination';
// import { ProductsList } from '../ProductsPage/ProductsList';

export const FavouritesPage = () => {
  return (
    <>
      <Breadcrumbs />
      <h1>Favourites</h1>
      <p>5 items</p>
      {/* <ProductsList products={{}} /> */}

      {/* Pagination is questionable */}
      <Pagination />
    </>
  );
};
