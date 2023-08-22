import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { objectOf } from 'prop-types';
import '../css/book.css';
import Button from './Button';
import { getBooks, removeBooks } from '../redux/books/booksSlice';

function Book({
  book
}) {
  const dispatch = useDispatch();
  async function handleRemove() {
await dispatch(removeBooks(book.id));
await dispatch(getBooks());
  }
  return (
    <div className="book">
      <div className="book-details">
        <h2 className="category">{book.category}</h2>
        <h2 className="title">{book.title}</h2>
        <h2 className="author">{book.author}</h2>
        <ul>
          <li>
            <button type="button" className="book-buttons left">
              Comments
            </button>
          </li>
          <li>
            <Button
              onClick={handleRemove}
              text="Remove"
              buttonClass="removeBtn middle"
            />
          </li>
          <li>
            <button type="button" className="book-buttons right">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-progress">
        <div className="circle" />
        <div>
          <div className="percent">64%</div>
          <span className="status">Completed</span>
        </div>
      </div>
      <div className="book-bookmark">
        <h2>CURRENT CHAPTER</h2>
        <h3>Chapter 17</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.arrayOf(
    objectOf(PropTypes.string, PropTypes.string, PropTypes.string),
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
