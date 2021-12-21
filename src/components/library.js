import React from 'react'
import BookList from './bookList'

function Library( {books} ) {
  return (
    <BookList books={books}/>
  )
}

export default Library