import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <h1 className="store-title"> Bookstore CMS </h1>
    <nav>
      <ul className="link">
        <li>
          <Link to="/" className="links">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/Categories/" className="links">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
