import React from 'react';
import PropTypes from 'prop-types';

const Bookitem = (props) => {
  const { title, author, deleteBook } = props;

  return (
    <div className="container">
      <div className="bookCard">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <button type="button" className="Remove" onClick={deleteBook}>Remove</button>
      </div>
    </div>
  );
};

Bookitem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Bookitem;
