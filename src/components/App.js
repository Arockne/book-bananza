import React, { useEffect, useState } from 'react'
import Library from './library'
import NavBar from './NavBar'
import About from './About'
import Book from './book'
import BookForm from './BookForm'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => setBooks(data))
  }, [])

  function addBook(book) {
    const updatedBooks = [...books, book]
    //setBooks((books) => [...books, book])
    setBooks(updatedBooks)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <p>Home</p>
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/books'>
          <Library books={books}/>
        </Route>
        <Route exact path='/books/new'>
          <BookForm addBook={addBook}/>
        </Route>
        <Route exact path='/books/:id'>
          <Book books={books}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
