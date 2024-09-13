import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore, createSelector } from '@reduxjs/toolkit';
import exampleReduser from '../features/exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReduser,
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
