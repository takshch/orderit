import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API = 'http://localhost:4000';
const PRODUCTS_API = `${API}/products`;

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const response = await fetch(PRODUCTS_API);
    const data = await response.json();
    return data;
  }
);

const LOADING_STATES = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected'
};

const initialState = {
  products: [],
  loading: LOADING_STATES.IDLE,
  error: null,
};

export const products = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      if(state.error) {
        state.error = null;
      }

      if(state.loading === LOADING_STATES.IDLE) {
        state.loading = LOADING_STATES.PENDING;
      }
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      if(state.loading === LOADING_STATES.PENDING) {
        state.loading = LOADING_STATES.IDLE;
        state.products.push(...action.payload);
      }
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      if(state.loading === LOADING_STATES.PENDING) {
        state.loading = LOADING_STATES.IDLE;
        state.error =  action.error;
      }
    })
  },
});

export default products.reducer;