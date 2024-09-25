import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { CartItemType } from '@/types/CartItems';
import { WritableDraft } from 'immer';
import { getFormattedDate } from '@/modules/shared/helpers/getFormattedDate';
import { getPurchaseHistory } from '@/modules/shared/helpers/getPurchaseHistory';

type CartSlice = {
  items: Record<string, CartItemType>;
  totalPrice: number;
};

const items = JSON.parse(localStorage.getItem('cart') || '{}');

const initialState: CartSlice = {
  items,
  totalPrice: 0,
};

const addItemsToPurchaseHistory = (state: WritableDraft<CartSlice>) => {
  const purchaseHistory = getPurchaseHistory();
  const formattedDate = getFormattedDate();

  const newPurchaseHistory = Object.keys(state.items).map(key => {
    const price = `$${state.items[key].price * state.items[key].amount}`;

    return {
      item: key,
      price: price,
      date: formattedDate,
    };
  });

  localStorage.setItem(
    'purchaseHistory',
    JSON.stringify([...purchaseHistory, ...newPurchaseHistory]),
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleAddToCart: (
      state,
      {
        payload: { id, category, price },
      }: PayloadAction<Omit<CartItemType, 'amount'>>,
    ) => {
      if (state.items[id]) {
        delete state.items[id];
      } else {
        state.items[id] = { category, id, amount: 1, price };
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    increaseAmount: (state, { payload: id }: PayloadAction<string>) => {
      if (state.items[id]) {
        state.items[id].amount++;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    decreaseAmount: (state, { payload: id }: PayloadAction<string>) => {
      if (state.items[id]) {
        state.items[id].amount--;
        if (state.items[id].amount === 0) {
          delete state.items[id];
        }
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, { payload: id }: PayloadAction<string>) => {
      if (state.items[id]) {
        delete state.items[id];
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    clearCart: state => {
      addItemsToPurchaseHistory(state);

      state.items = {};
      state.totalPrice = 0;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const {
  toggleAddToCart,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export default cartSlice.reducer;

export const getCartAmount = createSelector(
  (state: RootState) => state.cart.items,
  items => {
    let cartAmount = 0;
    for (const id in items) {
      cartAmount += items[id].amount;
    }
    return cartAmount;
  },
);

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  items => {
    let totalPrice = 0;
    for (const id in items) {
      totalPrice += items[id].amount * items[id].price;
    }
    return totalPrice;
  },
);
