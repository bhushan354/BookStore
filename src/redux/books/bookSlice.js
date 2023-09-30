import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const link = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WA5eot1mOTs5Y1g1bAoc/books/';

const initialState = {
  books: [],
  pending: false,
  complete: false,
};

const makeArray = (data) => {
  const setNewArr = data.map((item) => ({
    id: item[0],
    title: item[1][0].title,
    author: item[1][0].author,
    category: item[1][0].category,
  }));
  return setNewArr;
};

export const newBook = createAsyncThunk(
  'books/newBook',
  async ({ id, title, author }) => {
    const postData = {
      item_id: id,
      title,
      author,
      category: 'Romance',
    };
    const response = await axios.post(link, postData);
    return response;
  },
);

export const removeBook = createAsyncThunk('books/removeBook', async (index) => {
  const response = await axios.delete(`${link}${index}`);
  return response.data ? index : null;
});

export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async () => {
  const { data } = await axios(link);
  const newData = makeArray(Object.entries(data));
  return newData;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(newBook.pending, (state) => {
      state.complete = false;
    });
    builder.addCase(newBook.fulfilled, (state) => {
      state.complete = true;
    });
    builder.addCase(newBook.rejected, (state) => {
      state.complete = false;
    });
    builder.addCase(removeBook.pending, (state) => {
      state.complete = false;
    });
    builder.addCase(removeBook.fulfilled, (state) => {
      state.complete = true;
    });
    builder.addCase(removeBook.rejected, (state) => {
      state.complete = false;
    });
    builder.addCase(fetchAllBooks.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state.pending = false;
      state.books = action.payload;
    });
    builder.addCase(fetchAllBooks.rejected, (state) => {
      state.pending = false;
    });
  },
});

export default bookSlice.reducer;
