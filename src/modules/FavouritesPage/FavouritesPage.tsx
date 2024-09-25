import cn from 'classnames';

import { useAppSelector } from '@/app/hooks';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';

import { selectFavourites } from '@/features/favouritesSlice';
import { FavouritesList } from './components/FavouritesList';

import styles from './FavouritesPage.module.scss';
import { useTranslation } from 'react-i18next';

export const FavouritesPage = () => {
  const { t } = useTranslation();
  const items = useAppSelector(selectFavourites);

  const isEmpty = items.length === 0;

  return (
    <div className={cn('grid-container', styles['favourites-page'])}>
      <div className={styles['favourites-page__breadcrumbs']}>
        <Breadcrumbs />
      </div>

      <div className={styles['favourites-page__header']}>
        <h1 className={cn('style-h1', styles['favourites-page__title'])}>
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

      <div
        className={cn(
          styles['favourites-page__products-list'],
          { [styles['favourites-page--empty']]: isEmpty }, // Клас для останнього div
        )}
      >
        <FavouritesList items={items} />

      </div>
    </div>
  );
};
