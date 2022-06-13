import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      //return {
      //  ...state,
      //  cartItems: [],
      //};
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, { payload: itemId }) => {
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    increase: (state, { payload: itemId }) => {
      const item = state.cartItems.find(item => item.id == itemId);
      item.amount += 1;
    },
    decrease: (state, { payload: itemId }) => {
      const item = state.cartItems.find(item => item.id == itemId);
      item.amount -= 1;
    },
    calcTotal: state => {
      state.total = state.cartItems.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
      state.amount = state.cartItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calcTotal } =
  cartSlice.actions;
//console.log(cartSlice);
export default cartSlice.reducer;
