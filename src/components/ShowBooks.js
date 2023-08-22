import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/showbooks.css';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

function ShowBooks() {
  const dispatch = useDispatch();

  const{ books, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
     dispatch(getBooks());
  }, []);

  console.log(books);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="show-books">
      {books.map((book, index) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
      <AddBook />
    </div>
  );
}

export default ShowBooks;
