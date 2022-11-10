import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../redux/books/books';

const Addbook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const fetchTitle = (e) => setTitle(e.target.value);
  const fetchAuthor = (e) => setAuthor(e.target.value);
  const fetchCategory = (e) => setCategory(e.target.value);

  const addNew = (title, author, category, e) => {
    e.preventDefault();
    dispatch(addbook({
      id: uuidv4(),
      title,
      author,
      category,
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form className="AddNew">
        <label htmlFor="book-title">
          <input type="text" placeholder="Book Title" onChange={fetchTitle} value={title} required />
        </label>
        <label htmlFor="book-author">
          <input type="text" placeholder="Book Author" onChange={fetchAuthor} value={author} required />
        </label>
        <label htmlFor="book-categories">
          <select onChange={fetchCategory} value={category} required>
            <option value="action">Action</option>
            <option value="fiction">Fiction</option>
            <option value="adventure">Adventure</option>
          </select>
        </label>
        <button type="submit" onClick={(e) => addNew(title, author, category, e)}>Add Book</button>
      </form>
    </div>
  );
};

export default Addbook;
