import cn from 'classnames';

import { useAppSelector } from '@/app/hooks';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';

import { selectFavourites } from '@/features/favouritesSlice';
import { FavouritesList } from './components/FavouritesList';

import styles from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const items = useAppSelector(selectFavourites);
  return (
    <>
      <div className={cn('grid-container')}>
        <div className={styles['favourites-page__breadcrumbs']}>
          <Breadcrumbs />
        </div>

        <div className={styles['favourites-page__header']}>
          <h1 className={cn('style-h1', styles['product-page__title'])}>
            Favourites
          </h1>

          <p
            className={cn(
              'style-buttons-text',
              styles['favourites-page__product-amount'],
            )}
          >
            {items.length} items
          </p>
        </div>

        <div className={styles['favourites-page__products-list']}>
          <FavouritesList items={items} />
        </div>
      </div>
    </>
  );
};
