import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: { id: undefined },
  reducers: {
    update(state, action) {
      state.id = action.payload;
    },
  }
});

export const { update } = shopSlice.actions;

export default shopSlice.reducer;
