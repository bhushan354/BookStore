import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCategories: [],
  status: 'Loading',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.status = 'Loading';
    },
  },
});

export default categoriesSlice.reducer;
export const { setStatus } = categoriesSlice.actions;
