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

const LOADING_STATES = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected'
};

const initialState = {
  value: [],
  loading: LOADING_STATES.IDLE,
  error: null,
};

export const productsIds = createSlice({
  name: 'productsIds',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      if (state.error) {
        state.error = null;
      }

      if (state.loading === LOADING_STATES.IDLE) {
        state.loading = LOADING_STATES.PENDING;
      }
    })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (state.loading === LOADING_STATES.PENDING) {
          state.loading = LOADING_STATES.IDLE;
          state.value.push(...action.payload);
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (state.loading === LOADING_STATES.PENDING) {
          state.loading = LOADING_STATES.IDLE;
          state.error = action.error;
        }
      });
  },
});

export default productsIds.reducer;
