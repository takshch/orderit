import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialProduct } from './index';
import ProductService from '../../services/products';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (shopId, { dispatch }) => {
    const productsIds = await ProductService.loadAllByShopId(shopId);
    productsIds.forEach((id) => dispatch(initialProduct(id)));
    return productsIds;
  }
);

const initialState = {
  value: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const productsIds = createSlice({
  name: 'productsIds',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      if (state.isError) {
        state.isError = false;
        state.error = null;
      }

      if (!state.isLoading) {
        state.isLoading = true;
      }
    })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.value.push(...action.payload);
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.isError = true;
          state.error = action.error;
        }
      });
  },
});

export default productsIds.reducer;
