import React from 'react'
import '../css/addbook.css'

function AddBook() {
  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form action="" className='book-form'>
        <input type="text" placeholder='Book title'/>
        <input className='author' type="text" placeholder='Author'/>
        <button type='button'>ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook