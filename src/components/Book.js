import React from 'react'
import '../css/book.css'

function Book({book}) {
  return (
    <div className='book'>
      <div className='book-details'>
        <h2>{book.genre}</h2>
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
        <ul>
          <li>
            <button>Comments</button>
          </li>
          <li>
            <button>Remove</button>
          </li>
          <li>
            <button>Edit</button>
          </li>
        </ul>
      </div>
      <div className='book-progress'>
        <div>picture</div>
        <div>
          <div>64%</div>
          <span>completed</span>
        </div>
      </div>
      <div className='book-bookmark'>
        <h2>CURRENT CHAPTER</h2>
        <h2>Chapter 17</h2>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book