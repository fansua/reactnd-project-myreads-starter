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
      this.setState({books})
      })

    }

    UpdateBook(shelf,book){
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf
        this.setState(state =>  ({
          books:state.books.filter(bk => bk.id !== book.id).concat(book)
        }))
      })
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
            shelfBooks={this.state.books}
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
