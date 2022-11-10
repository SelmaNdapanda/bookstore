import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Bookitem = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="container">
      <div className="bookCard">
        <p className="category" value={category}>{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <button type="button" className="Remove" onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

Bookitem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Bookitem;
