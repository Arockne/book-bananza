import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//button to add to cart
//button for deleting book
//
function Book({books}) {
  const [book, setBook] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    const foundBook = books.find((book) => book.id === Number(id))
    if (foundBook) {
      setBook(foundBook)
    }
  }, [books])
  
  function bookDetail() {
    return (
    <>
          <h2>{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <p>{book.description}</p>
    </>
    )
  }

  function bookError() { 
    if (books.length === 0) {
      return <div></div>
    } else {
      return <p>Book not found</p>
    }
  }

  return (
    <div>{book.title ? bookDetail() : bookError()}</div> 
  )
}

export default Book