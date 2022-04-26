import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AccountService from '../../services/account';

const { assign } = Object;

export const login = createAsyncThunk(
  'user/login',
  async (loginDetails) => {
    const data = await AccountService.login(loginDetails);
    return data;
  }
);

const initialState = {
  value: {
    isAuthenticated: false,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const authentication = createSlice({
  name: 'authentication',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      if (state.isError) {
        state.isError = false;
        state.error = null;
      }

      if (!state.isLoading) {
        state.isLoading = true;
      }
    })
      .addCase(login.fulfilled, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
        }

        const { uid } = action.payload;
        state.value = assign({}, state.value, { uid, isAuthenticated: true });
      })
      .addCase(login.rejected, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.isError = true;
          state.error = action.error.message;
        }
      });
  },
});

export default authentication.reducer;
