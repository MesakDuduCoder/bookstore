import React from 'react';
import { useSelector } from 'react-redux';
import '../css/showbooks.css';
import Book from './Book';
import AddBook from './AddBook';

function ShowBooks() {
  const { books } = useSelector((store) => store.books);

  return (
    <div className="show-books">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <AddBook />
    </div>
  );
}

export default ShowBooks;
