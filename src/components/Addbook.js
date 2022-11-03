import React from 'react';

const Addbook = () => (
  <div className="addCard">
    <h2>ADD NEW BOOK</h2>
    <form className="addNew">
      <label htmlFor="book-title">
        <input type="text" placeholder="Book Title" required />
      </label>
      <label htmlFor="book-author">
        <input type="text" placeholder="Book Author" required />
      </label>
      <label htmlFor="book-categories">
        <select className="categories" id="category" required>
          <option value="action">Action</option>
          <option value="science">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </label>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Addbook;
