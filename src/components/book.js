import React from 'react'

//button to add to cart
//button for deleting book
//
function Book({book}) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <p>{}</p>
    </div>
  )
}

export default Book