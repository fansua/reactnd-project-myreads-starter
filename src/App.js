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
        console.log("These are the books in the database for the ListBooks")
        console.log(books)
      this.setState({books: books})
      })

    }
    UpdateBook(shelf,book){

      book.shelf = shelf
      console.log("after assignment")
      console.log(book)
        this.setState(state =>({
          books:state.books.concat([book])
        }))
      //BooksAPI.update(book,shelf).then( bk => {
      //  this.componentDidMount()
      //  this.setState(state =>({
          //books:state.books.concat([book])
        //}))
      //})
    }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ ()=> (
          <CreateShelfCase books={this.state.books}
          onMoveBook={(shelf,book) => {
            this.UpdateBook(shelf,book)
          }}
          />
        )}/>

        <Route path='/search' render={({history}) => (
          <AddBook books={this.state.books}
          onUpdateBook={(shelf,book) => {
            this.UpdateBook(shelf,book)
            history.push('/')
          }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
