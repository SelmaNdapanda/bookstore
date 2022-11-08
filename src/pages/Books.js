import React from 'react';
import Bookitem from '../components/Bookitem';
import Addbook from '../components/Addbook';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const deleteBook = (book) => { 
    dispatch(removeBook(book))};
    
  return (
    <>
      <div>
        {books.map((book) => (
          <Bookitem
            key={book.id}
            title={book.title}
            author={book.author}
            deleteBook={() => deleteBook(book)}
          />
        ))}
        <Addbook />
      </div>
    </>
  );
}

export default Books;
