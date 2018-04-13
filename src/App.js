import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CreateShelfCase from './CreateShelfCase'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
     books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then( (books) => {
        console.log(books)
      this.setState({books: books})
      })
    }
    updateExternalBookList(shelfTitle,book) {
      console.log(typeof shelfTitle)
      console.log(typeof book)
      BooksAPI.update(book,shelfTitle).then( (books) => {
        console.log(book)
      this.setState({books: books})
      })
    }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ ({history})=> (
          <CreateShelfCase
          books={this.state.books}
          updateDatabase={(shelfTitle,bookId) =>{
            this.updateExternalBookList(shelfTitle,bookId)
              history.push("/")
          }}/>
        )}/>

        <Route path='/search' render={({history}) => (
          <AddBook books={this.state.books}
          updateExternalDatabase={(shelfTitle,bookId) =>{
            this.updateExternalBookList(shelfTitle,bookId)
            history.push("/")
          }}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
