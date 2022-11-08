import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bookitem from '../components/Bookitem';
import Addbook from '../components/Addbook';

import { removeBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const remove = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
      <div>
        {books.map((book) => (
          <Bookitem
            key={book.id}
            title={book.title}
            author={book.author}
            remove={() => remove(book)}
          />
        ))}
        <Addbook />
      </div>
    </>
  );
};

export default Books;
