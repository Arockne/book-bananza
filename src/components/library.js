import React, { useState, useEffect } from 'react'
import BookList from './bookList'

function Library() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => setBooks(data))
  }, [])
  console.log(books)
  return (
    <BookList books={books}/>
  )
}

export default Library