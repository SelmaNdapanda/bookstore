import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

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
    <FaUserCircle className="userIcon" />
  </header>
);

export default Navbar;
