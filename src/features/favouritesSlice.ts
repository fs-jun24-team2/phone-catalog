import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Product } from '@/types/Product';
import { AggregateProduct } from '@/types/AggregateProduct';
import { ProductsCategory } from '@/types/ProductsCategory';
import { isAggregateProduct } from '@/modules/shared/helpers/isAggregateProduct';
import { FavouriteProduct } from '@/types/FavouriteProduct';

type FavouritesState = {
  items: FavouriteProduct[];
};

const initialState: FavouritesState = {
  items: JSON.parse(localStorage.getItem('favourites') || '[]'),
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (
      state,
      action: PayloadAction<{
        product: Product | AggregateProduct;
        category: ProductsCategory;
      }>,
    ) => {
      const { product, category } = action.payload;
      const id = isAggregateProduct(product) ? product.itemId : product.id;

      const existingIndex = state.items.findIndex(fav => fav.id === id);

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push({ id, product, category });
      }
      localStorage.setItem('favourites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;

export const selectFavourites = (state: RootState) => state.favourites.items;

export default favouritesSlice.reducer;

export const getFavouritesAmount = createSelector(
  (state: RootState) => state.favourites.items,
  items => {
    return items.length;
  },
);
