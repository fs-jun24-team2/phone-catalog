import cn from 'classnames';

import { useAppSelector } from '@/app/hooks';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';

import { selectFavourites } from '@/features/favouritesSlice';
import { FavouritesList } from './components/FavouritesList';

export const FavouritesPage = () => {
  const items = useAppSelector(selectFavourites);
  return (
    <>
      <div className={cn('grid-container')}>
        <div style={{ paddingTop: '100px' }}></div>
        <Breadcrumbs />
        <h1>Favourites</h1>
        <p>{items.length} items</p>
        <FavouritesList items={items} />
      </div>
    </>
  );
};
