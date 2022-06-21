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
      const data = assign({}, action.payload);

      for (const [id, { quantity }] of Object.entries(data)) {
        if (quantity === 0) {
          delete data[id];
        }
      }

      assign(state.products, data);
    },
  }
});

export const { addProducts } = cartSlice.actions;

export default cartSlice.reducer;
