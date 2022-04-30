import { createSlice } from '@reduxjs/toolkit';

const { assign } = Object;

const initialState = {
  products: {},
  hasProducts: false,
};

const cartSlice = createSlice({
  name: 'tempCart',
  initialState,
  reducers: {
    updateQuantity(state, action) {
      const { id, quantity = 0 } = action.payload;

      if (state.products[id]) {
        assign(state.products[id], { quantity });
      } else {
        assign(state.products, { [id]: { quantity } });
      }

      const values = Object.values(state.products);
      state.hasProducts = values.some(({ quantity }) => quantity > 0);
    },
  }
});

export const { updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
