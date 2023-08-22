import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, getBooks } from '../redux/books/booksSlice';
import '../css/addbook.css';
import Button from './Button';

function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { books } = useSelector((store) => store.books);

  const categories = ['Horror', 'Fiction', 'Novel', 'Romance', 'Fantasy', 'Thriller', 'Science-Fiction', 'Mystery', 'Crime', 'Anime'];
  const random = Math.floor(Math.random() * 10);


  let itemId = books.length;

  books.forEach((item) => {
    if (item.item_id === `item_${itemId}`) {
      itemId += 1;
    }
  });

  const book = {
    item_id: `item_${itemId}`,
    title: `${title}`,
    author: `${author}`,
    category: categories[random],
  };

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  async function handleAddBook() {
    await dispatch(addBooks(book));
    // await dispatch(getBooks());
  }
  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form action="" className="book-form">
        <input type="text" placeholder="Book title" onChange={handleTitle} />
        <input className="author" type="text" placeholder="Author" onChange={handleAuthor} />

        <Button
          onClick={handleAddBook}
          text="ADD BOOK"
          buttonClass="addBtn"
        />
      </form>
    </div>
  );
}



export default AddBook;
