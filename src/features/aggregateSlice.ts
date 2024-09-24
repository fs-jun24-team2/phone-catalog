import { getAllProducts } from '@/api/products';
import { AggregateProduct } from '@/types/AggregateProduct';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { PRODUCT_SLIDER_NUM } from '@/constants';

type AggregateProductState = { [id: string]: AggregateProduct };

type AggregateSlice = {
  products: AggregateProductState;
  isLoading: boolean;
  isError: boolean;
};

const initialState = {
  products: {} as AggregateProductState,
  isLoading: false,
  isError: false,
};

export const loadAllProductsAsync = createAsyncThunk(
  'aggregate/load',
  async () => {
    const products = await getAllProducts();
    return products;
  },
);

const aggregateSlice = createSlice({
  name: 'aggregate',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadAllProductsAsync.pending, (state: AggregateSlice) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        loadAllProductsAsync.fulfilled,
        (
          state: AggregateSlice,
          { payload: products }: PayloadAction<AggregateProduct[]>,
        ) => {
          state.isLoading = false;
          products.forEach(product => {
            state.products[product.itemId] = product;
          });
        },
      )
      .addCase(loadAllProductsAsync.rejected, (state: AggregateSlice) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default aggregateSlice.reducer;
// export const selectAggregate = (state: RootState) => state.products;
export const selectAggregateProducts = (state: RootState) =>
  state.aggregate.products;
export const selectAggregateLoading = (state: RootState) =>
  state.aggregate.isLoading;

export const getHotPriceProduct = createSelector(
  (state: RootState) => state.aggregate.products,
  products => {
    const hotPriceProduct = Object.values(products)
      .map(product => ({
        ...product,
        discount: product.fullPrice - product.price,
      }))
      .sort((a, b) => b.discount - a.discount);

    return hotPriceProduct.slice(0, PRODUCT_SLIDER_NUM);
  },
);

export const getNewBrandProduct = createSelector(
  (state: RootState) => state.aggregate.products,
  products => {
    const newBrandProduct = Object.values(products).sort(
      (a, b) => b.year - a.year,
    );

    return newBrandProduct.slice(0, PRODUCT_SLIDER_NUM);
  },
);
