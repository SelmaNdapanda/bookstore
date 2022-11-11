import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <h1 className="store-title"> Bookstore CMS </h1>
    <nav>
      <ul className="links">
        <li>
          <Link to="/" className="link book-link active">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/Categories/" className="link category-link">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
