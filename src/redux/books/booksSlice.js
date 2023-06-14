import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
    },
    removeBook: (state, action) => {
      const bookId = action.payload.id;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
