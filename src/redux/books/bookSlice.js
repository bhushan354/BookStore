import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allBook: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.allBook = [...state.allBook, action.payload];
    },
    removeBook: (state, action) => {
      const indexToRemove = state.allBook.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.allBook.splice(indexToRemove, 1);
      }
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
