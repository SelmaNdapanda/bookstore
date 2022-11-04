import React from 'react';

const Bookitem = (props) => {
  const { category, title, author,} = props;

  return (
  <div className="container">
    <div className="bookCard">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <button type="button" className="Remove">Remove</button>
    </div>
    </div>
  )
};

export default Bookitem;
