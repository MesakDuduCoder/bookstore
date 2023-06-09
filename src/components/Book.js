import React from 'react';
import PropTypes from 'prop-types';
import '../css/book.css';

function Book({ book }) {
  return (
    <div className="book">
      <div className="book-details">
        <h2>{book.genre}</h2>
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button">Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="book-progress">
        <div>picture</div>
        <div>
          <div>64%</div>
          <span>completed</span>
        </div>
      </div>
      <div className="book-bookmark">
        <h2>CURRENT CHAPTER</h2>
        <h2>Chapter 17</h2>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string, PropTypes.string, PropTypes.string)
    .isRequired,
};

export default Book;
