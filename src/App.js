import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CreateShelfCase from './CreateShelfCase'
import AddBook from './AddBook'
import './App.css'


const shelfTitle = [
  {
    "id": "cr2018",
    "shelf": "currentlyReading"
  },
  {
    "id": "wtr2018",
    "shelf": "wantToRead"
  },
  {
    "id": "r2018",
    "shelf": "read"
  }
]
class BooksApp extends React.Component {
  state = {
     books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then( (books) => {
        console.log(books)
      this.setState({books: books})
      })

      BooksAPI.search("g").then( (booksSearch) => {
        console.log(booksSearch)
      })
    }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ ()=> (
          <CreateShelfCase books={this.state.books} shelfTitle={shelfTitle} />
        )}/>

        <Route path='/search' render={() => (
          <AddBook books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
