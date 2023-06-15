import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

const id = 'fVdWgIUf9MtyDEM6BCUF';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`;

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBooks = createAsyncThunk(
  'books/addBooks',
  async (book, thunkAPI) => {
    try {
      const res = await axios.post(
        url,
        {
          item_id: book.item_id,
          title: book.title,
          author: book.author,
          category: book.category,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const removeBooks = createAsyncThunk(
  'books/removeBooks',
  async (bookId, thunkAPI) => {
    try {
      const deleteUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books/${bookId}`;
      const res = await axios.delete(deleteUrl);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
