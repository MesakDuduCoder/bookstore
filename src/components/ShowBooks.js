import React, { useState } from 'react'
import '../css/showbooks.css'
import Book from './Book'
import AddBook from './AddBook'

function ShowBooks() {
  const [books, setBooks] = useState([
    {
        "genre":"Action",
        "title":"The Hunger Games",
        "author":"Suzanne Collins"
    },
    {
        "genre":"Action",
        "title":"The Hunger Games",
        "author":"Suzanne Collins"
    }
  ])

  return (
    <div className='show-books'>
        {
            books.map(book=><Book key={book} book={book}/>)
        }
        <AddBook/>
    </div>
  )
}

export default ShowBooks