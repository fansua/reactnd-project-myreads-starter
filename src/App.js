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
        console.log("Here's a lst of shelf books")
        console.log(books)
      this.setState({books: books})
      })

    }
  UpdateBook(shelf,book){
      if(book.shelf !== shelf){
          let tempBookList= this.state.books.filter((bk)=> (bk.id !== book.id))
          book.shelf = shelf
          tempBookList.push(book)
          this.setState({books: tempBookList})
          BooksAPI.update(book,shelf)

      }
    }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ ()=> (
          <CreateShelfCase
            books={this.state.books}
            onMoveBook={(shelf,book) => {
              this.UpdateBook(shelf,book)
            }}
          />
        )}/>

        <Route path='/search' render={({history}) => (
          <AddBook
            onUpdateBook={(shelf,book) => {
              this.UpdateBook(shelf,book)
              history.push('/')
            }}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
