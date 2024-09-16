/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getPhones } from '../api/phones';
import { Phone } from '../types/Phone';

type PhonesSlice = {
  phones: Phone[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: PhonesSlice = {
  phones: [],
  isLoading: false,
  isError: false,
};

export const loadPhonesAsync = createAsyncThunk('phones/load', async () => {
  const phones = await getPhones();
  return phones;
});

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadPhonesAsync.pending, (state: PhonesSlice) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        loadPhonesAsync.fulfilled,
        (state: PhonesSlice, { payload }: PayloadAction<Phone[]>) => {
          state.isLoading = false;
          state.phones = payload;
        },
      )
      .addCase(loadPhonesAsync.rejected, (state: PhonesSlice) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default exampleSlice.reducer;
export const selectPhones = (state: RootState) => state.phones;

// How to use in component:
// ==>> const { phones } = useAppSelector(selectPhones);
// or
// const {phones, isLoading, isError} = useAppSelector(selectPhones);
