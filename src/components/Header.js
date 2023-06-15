import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <h1>Bookstore CMS</h1>

      <Link to="/" className="link1">BOOKS</Link>

      <Link to="/categories" className="link2">CATEGORIES</Link>

      <button type="button">
        <span className="material-icons">
          person
        </span>
      </button>
    </nav>
  );
}

export default Header;
