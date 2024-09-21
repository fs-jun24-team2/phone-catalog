import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore, createSelector } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';
import aggregateReducer from '../features/aggregateSlice';

export const store = configureStore({
  reducer: {
    aggregate: aggregateReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const createAppSelector = createSelector.withTypes<RootState>;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
