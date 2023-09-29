import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import bookReducer from './books/booksSlice';

export const store = configureStore({
    reducer: {
      book: bookReducer,
      category: categoriesReducer,
    },
  });