import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WQWEBjJRLQwHf5AglGaT/books';

const initialState = [];

export const addbook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(URL, {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
  return {
    book: [
      book.id,
      [
        {
          title: book.title,
          author: book.author,
          category: book.category,
        },
      ],
    ],
  };
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${URL}/${id}`);
  return { id };
});

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const { data } = await axios.get(URL);
  return { books: Object.entries(data) };
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${GET_BOOKS}/fulfilled`:
      return action.payload.books;
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
