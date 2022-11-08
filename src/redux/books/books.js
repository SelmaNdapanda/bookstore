const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
  id: 1,
  title: 'The Hunger Game',
  author: 'Suzanne Collins',
},
{
  id: 2,
  title: 'Dune',
  author: 'Frank Herbert',
},
{
  id: 3,
  title: 'Capital in the Twenty-First Century',
  author: 'Suzanne Collins',
},
];

export const addbook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
