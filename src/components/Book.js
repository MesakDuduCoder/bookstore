import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { objectOf } from 'prop-types';
import '../css/book.css';
import Button from './Button';
import { removeBooks } from '../redux/books/booksSlice';

function Book({
  book, id, refresh, setRefresh,
}) {
  const dispatch = useDispatch();
  const add = refresh + 1;
  return (
    <div className="book">
      <div className="book-details">
        <h2 className="category">{book[0].category}</h2>
        <h2 className="title">{book[0].title}</h2>
        <h2 className="author">{book[0].author}</h2>
        <ul>
          <li>
            <button type="button" className="book-buttons left">
              Comments
            </button>
          </li>
          <li>
            <Button
              onClick={async () => {
                await dispatch(removeBooks(id));
                setRefresh(add);
              }}
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
  refresh: PropTypes.number.isRequired,
  setRefresh: PropTypes.func.isRequired,
};

export default Book;
