/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getProducts } from '../api/products';
import { Product } from '../types/Product';
import { ProductsCategory } from '@/types/ProductsCategory';

type ProductsSlice = {
  phones: { [id: string]: Product };
  tablets: { [id: string]: Product };
  accessories: { [id: string]: Product };
  isLoading: boolean;
  isError: boolean;
};

const initialState: ProductsSlice = {
  phones: {},
  tablets: {},
  accessories: {},
  isLoading: false,
  isError: false,
};

export const loadProductsAsync = createAsyncThunk(
  'products/load',
  async (category: ProductsCategory) => {
    const products = await getProducts(category);
    return { category, products };
  },
);

const exampleSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadProductsAsync.pending, (state: ProductsSlice) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        loadProductsAsync.fulfilled,
        (
          state: ProductsSlice,
          action: PayloadAction<{
            category: ProductsCategory;
            products: Product[];
          }>,
        ) => {
          const { category, products } = action.payload;
          state.isLoading = false;
          products.forEach(product => {
            state[category][product.id] = product;
          });
        },
      )
      .addCase(loadProductsAsync.rejected, (state: ProductsSlice) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default exampleSlice.reducer;
export const selectProducts = (state: RootState) => state.products;
export const selectPhones = (state: RootState) => state.products.phones;
export const selectTablets = (state: RootState) => state.products.tablets;
export const selectAccessories = (state: RootState) =>
  state.products.accessories;

// How to use in component:
// ==>> const { phones } = useAppSelector(selectPhones);
// or
// const {phones, isLoading, isError} = useAppSelector(selectPhones);
