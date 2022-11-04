import { React, useState } from 'react';
import Bookitem from '../components/Bookitem';
import Addbook from '../components/Addbook';

function Books() {
  const [books] = useState([
    {
      id: '1',
      category: 'action',
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
  ]);
  return (
    <>
      <div>
        {books.map((book) => (
          <Bookitem
            key={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
        <Addbook />
      </div>
    </>
  );
}

export default Books;
