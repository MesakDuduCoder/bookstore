import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/showbooks.css';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

function ShowBooks() {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((store) => store.books);
  const [refresh, setRefresh] = useState(0);

  const books2 = Object.values(books);
  const ids = Object.keys(books);

  useEffect(() => {
    async function updateBooks() {
      await dispatch(getBooks());
    }
    updateBooks();
  }, [refresh]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="show-books">
      {books2.map((book, index) => (
        <Book
          key={book.item_id}
          book={book}
          id={ids[index]}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      ))}
      <AddBook refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
}

export default ShowBooks;
