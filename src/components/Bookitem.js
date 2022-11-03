import React from 'react';

const Bookitem = () => {
  return (
    <div className="container">
      <div className="bookCard">
        <p className="category">Action</p>
        <p className="title"> Hunger Games</p>
        <p className="author">Suzanne Collins</p>
        <button type="button" className="Remove">Remove</button>
      </div>
      <div className="bookCard">
        <p className="category">Science Fiction</p>
        <p className="title"> Dune</p>
        <p className="author">Frank Herbert</p>
        <button type="button" className="Remove">Remove</button>
      </div>
      <div className="bookCard">
        <p className="category">Economy</p>
        <p className="title"> Capital in the Twenty-First Century</p>
        <p className="author">Suzanne Collins</p>
        <button type="button" className="Remove">Remove</button>
      </div>
    </div>
  );
}

export default Bookitem;