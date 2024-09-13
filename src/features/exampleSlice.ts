/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const exampleSlice = createSlice({
  name: 'example',
  initialState: [] as number[],
  reducers: {
    addExample: () => {
      return [1, 2];
    },
  },
});

export default exampleSlice.reducer;
export const { addExample } = exampleSlice.actions;

export const selectExample = (state: RootState) => state.example;

// How to use in component:
// ==>> const example = useAppSelector(selectExample); it's mean you get example state from root state
// instead: const example = useSelector(state => state.example);
