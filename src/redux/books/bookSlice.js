import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booklist: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booklist = [...state.booklist, action.payload];
    },
    removeBook: (state, action) => {
      const indexToRemove = state.booklist.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.booklist.splice(indexToRemove, 1);
      }
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
