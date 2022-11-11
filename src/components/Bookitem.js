import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const Bookitem = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBook(id));
  };
  const percentage = 0;

  return (
    <div className="bookCard">
      <div className="bookDesc">
        <p className="text category" value={category}>{category}</p>
        <p className="text title">{title}</p>
        <p className="text author">{author}</p>
        <button type="button" className="remove" onClick={remove}>Remove</button>
      </div>
      <div className="progressContainer">
        <div className="graph">
          <CircularProgressbar value={percentage} styles={{ path: { stroke: `rgb(2, 144, 255, ${percentage / 100})` } }} />
        </div>
        <div className="percentage">
          <p className="percentageNum">{`${percentage}%`}</p>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="bookChapter">
        <h2 className="currentChapter">CURRENT CHAPTER</h2>
        <h3 className="chapter">Chapter 1</h3>
        <button type="button" className="progressBtn">
          UPDATE PROGRESS
        </button>
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
