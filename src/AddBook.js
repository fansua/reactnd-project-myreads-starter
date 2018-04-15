import React, { Component } from 'react'
import MoveBook from './MoveBook'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
//import {DebounceInput} from 'react-debounce-input'

class AddBook extends Component{
  state = {
     searchedBooks: [],
     query: ''
  }

  createSearchedBookList = (query) => {
    BooksAPI.search(query).then( (searchedBooks) => {
      console.log("These are the search books")
      console.log(searchedBooks)
      this.setState({searchedBooks: searchedBooks})
    })
  }
  updateQuery = (query) => {
    console.log(query)
    if(query && query.length > 0){
      this.setState({query: query.trim()})
      this.createSearchedBookList(query)
    }
    else{
       this.setState({query: ""})
      this.setState({searchedBooks: [] })
    }

  }

  setDefaultImage = (books) => {
    console.log(books.imageLinks)
    const defaultImage ="none"
    if(books.imageLinks)
     return `url(${books.imageLinks.thumbnail})`
    else
      console.log("got here")
      return `url(${defaultImage})`
   }

  render(){
        const { query, searchedBooks} = this.state
        const{onUpdateBook} = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
        </div>
        { searchedBooks.length > 0 && (
          <div className="search-books-results">
            <ol className="books-grid">
            {searchedBooks.map((book) =>(
              <li key={book.id} className='book'>
                <div className='book-top'>
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${this.setDefaultImage(book)}` }}></div>
                    <MoveBook
                    bookData={book}
                    onChangeBookData={onUpdateBook}
                    />
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors}</div>
              </li>
            ))}
            </ol>
          </div>
        )}

    </div>
    )
  }
}

export default AddBook


/*


*/
