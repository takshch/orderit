import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductService from '../../services/products';

const { assign } = Object;

export const fetchProductById = createAsyncThunk(
  'product/fetchById',
  async (productId, { dispatch }) => {
    const data = await ProductService.loadById(productId);
    dispatch(addProduct({ id: productId, data }));
  }
);

const LOADING_STATES = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected'
};

const initialState = {
  value: {},
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initialProduct: (state, action) => {
      const id = action.payload;

      const data = {
        [id]: {
          loading: LOADING_STATES.IDLE,
          error: null,
          value: {},
        }
      };
      assign(state.value, data);
    },
    addProduct: (state, action) => {
      const { id, data } = action.payload;
      assign(state.value[id], { value: data });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state, action) => {
        const { meta: { arg: id } } = action;

        if (state.value[id].error) {
          assign(state.value[id], { error: null });
        }

        if (state.value[id].loading === LOADING_STATES.IDLE) {
          assign(state.value[id], { loading: LOADING_STATES.PENDING });
        }
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const { meta: { arg: id } } = action;

        if (state.value[id].loading === LOADING_STATES.PENDING) {
          assign(state.value[id], { loading: LOADING_STATES.IDLE });
        }
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        const { meta: { arg: id } } = action;

        if (state.value[id].loading === LOADING_STATES.PENDING) {
          assign(state.value[id], { loading: LOADING_STATES.IDLE });
          assign(state.value[id], { error: action.error });
        }
      });
  },
});

export const { initialProduct, addProduct } = products.actions;

export default products.reducer;
