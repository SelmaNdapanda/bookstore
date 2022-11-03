import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className='navbar'>
    <nav className='nav'>
      <h1 className='store-title'> Bookstore CMS </h1>
      <ul className='link'>
        <li>
          <Link to="/" className='links'>
            Books
          </Link>
        </li>
        <li>
          <Link to="/Categories/" className='links'>
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;