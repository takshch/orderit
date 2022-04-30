import { createSlice } from '@reduxjs/toolkit';

const { assign } = Object;

const initialState = {
  products: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProducts(state, action) {
      assign(state.products, action.payload);
    },
  }
});

export const { addProducts } = cartSlice.actions;

export default cartSlice.reducer;
