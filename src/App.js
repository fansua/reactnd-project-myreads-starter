import React from 'react'
import * as BooksAPI from './BooksAPI'
import CreateShelfCase from './CreateShelfCase'
import AddBook from './CreateShelfCase'
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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
    showSearchPage: false
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
        <CreateShelfCase books={this.state.books} shelfTitle={shelfTitle} />
      </div>
    )
  }
}

export default BooksApp
