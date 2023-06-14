import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../css/addbook.css';
import Button from './Button';

function AddBook() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
          onClick={() => {
            dispatch(addBook({
              item_id: books.length,
              title,
              author,
            }));
          }}
          text="ADD BOOK"
        />
      </form>
    </div>
  );
}

export default AddBook;
