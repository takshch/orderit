import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products.push(...action.payload);
    },
  }
});

export const { addProducts } = cartSlice.actions;

export default cartSlice.reducer;
