import { FavouriteProduct } from '@/types/FavouriteProduct';

export const hasFavouritesProduct = (currentId: string): boolean => {
  const localFavourites = JSON.parse(
    localStorage.getItem('favourites') || `[]`,
  ) as FavouriteProduct[];

  return localFavourites.some(({ id }) => {
    return currentId === id;
  });
};
