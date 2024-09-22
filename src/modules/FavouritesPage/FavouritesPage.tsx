import cn from 'classnames';
import styles from '../ProductsPage/ProductsList/ProductsList.module.scss';
import { useAppSelector } from '@/app/hooks';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';

import { FavouriteCard } from './components/FavouritesList';
import { selectFavourites } from '@/features/favouritesSlice';

export const FavouritesPage = () => {
  const items = useAppSelector(selectFavourites);
  return (
    <>
      <div className={cn('grid-container')}>
        <div style={{ paddingTop: '100px' }}></div>
        <Breadcrumbs />
        <h1>Favourites</h1>
        <p>{items.length} items</p>

        <div className={cn('grid-container', [styles['products-list']])}>
          {items.map(item => (
            <div key={item.id} className={styles['products-list__product']}>
              <FavouriteCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
