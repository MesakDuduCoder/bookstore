import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </nav>
      <button type="button">pic</button>
    </div>
  );
}

export default Header;
