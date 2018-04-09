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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ ()=> (
          <CreateShelfCase books={this.state.books}/>
        )}/>

        <Route path='/search' render={() => (
          <AddBook books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
