import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
}, applyMiddleware(thunk));

export default store;
