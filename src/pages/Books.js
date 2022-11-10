import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bookitem from '../components/Bookitem';
import Addbook from '../components/Addbook';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <div>
        {books.map((book) => (
          <Bookitem
            key={book[0]}
            id={book[0]}
            title={book[1][0].title}
            author={book[1][0].author}
            category={book[1][0].category}
          />
        ))}
        <Addbook />
      </div>
    </>
  );
};

export default Books;
