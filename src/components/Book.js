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
        <h2>{book[0].category}</h2>
        <h2>{book[0].title}</h2>
        <h2>{book[0].author}</h2>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <Button
              onClick={async () => {
                await dispatch(removeBooks(id));
                setRefresh((add));
              }}
              text="Remove"
            />
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
  book: PropTypes.arrayOf(
    objectOf(PropTypes.string, PropTypes.string, PropTypes.string),
  ).isRequired,
  id: PropTypes.string.isRequired,
  refresh: PropTypes.number.isRequired,
  setRefresh: PropTypes.func.isRequired,
};

export default Book;
