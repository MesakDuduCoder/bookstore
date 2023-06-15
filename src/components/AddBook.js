import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addBooks } from '../redux/books/booksSlice';
import '../css/addbook.css';
import Button from './Button';

function AddBook({ refresh, setRefresh }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { books } = useSelector((store) => store.books);

  const categories = ['Horror', 'Fiction', 'Novel', 'Romance', 'Fantasy', 'Thriller', 'Science-Fiction', 'Mystery', 'Crime', 'Anime'];
  const random = Math.floor(Math.random() * 10);
  const id = Object.keys(books);
  let itemId = id.length;

  id.forEach((item) => {
    if (item === `item_${itemId}`) {
      itemId += 1;
    }
  });

  const book = {
    item_id: `item_${itemId}`,
    title: `${title}`,
    author: `${author}`,
    category: categories[random],
  };
  const add = refresh + 1;

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form action="" className="book-form">
        <input type="text" placeholder="Book title" onChange={handleTitle} />
        <input className="author" type="text" placeholder="Author" onChange={handleAuthor} />

        <Button
          onClick={async () => {
            await dispatch(
              addBooks(book),
            );

            setRefresh(add);
          }}
          text="ADD BOOK"
        />
      </form>
    </div>
  );
}

AddBook.propTypes = {
  refresh: PropTypes.number.isRequired,
  setRefresh: PropTypes.func.isRequired,
};

export default AddBook;
