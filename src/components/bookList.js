import React from 'react'
import Book from './book'

function BookList({ books }) {
  return (
    <div>
        {
          books.map((book) => <Book key={book.isbn} book={book}/>)
        }
    </div>
  )
}

export default BookList