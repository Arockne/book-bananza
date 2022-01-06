import React from 'react'
import { Link } from 'react-router-dom'

function BookList({ books }) {
  return (
    <div>
        {
          books.map((book) => {
            return (
              <div key={book.id}>
                <Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link>
              </div>
            )
          })
        }
    </div>
  )
}

export default BookList