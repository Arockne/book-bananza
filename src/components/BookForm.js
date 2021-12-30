import React, { useState } from 'react'

const defaultFormData = {
  isbn: '',
  title: '',
  subtitle: '',
  author: '',
  published: '',
  publisher: '',
  pages: '',
  description: '',
  website: ''
}

function BookForm({ addBook }) {
  const [formData, setFormData] = useState(defaultFormData)

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    //post request
    //update books state
    //clear form data
    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      addBook(data)
      setFormData(defaultFormData)
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input 
          type='text' 
          name='title'
          value={formData.title}
          onChange={handleFormChange}
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input 
          type='text' 
          name='author'
          value={formData.author}
          onChange={handleFormChange}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input 
          type='text' 
          name='description'
          value={formData.description}
          onChange={handleFormChange}
          />
        </label>
      </div>
      <input type='submit' />
    </form>
  )
}

export default BookForm