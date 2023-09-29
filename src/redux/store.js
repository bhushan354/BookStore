/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import bookReducer from './books/booksSlice.js';
/* eslint-enable */

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoriesReducer,
  },
});

export default store;
