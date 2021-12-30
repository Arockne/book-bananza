import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//button to add to cart
//button for deleting book
//
function Book({books}) {
  const [book, setBook] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    setBook(books.find((book) => book.id === Number(id)))
  }, [])
  
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <p>{book.description}</p>
    </div>
  )
}

export default Book