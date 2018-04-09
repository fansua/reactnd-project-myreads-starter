import React, { Component } from 'react'
import MoveBook from './MoveBook'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component{
  state = {
     searchedBooks: [],
     query: ''
  }

  createSearchedBookList = (query) => {
    BooksAPI.search(query).then( (searchedBooks) => {
      console.log(searchedBooks)
      this.setState({searchedBooks: searchedBooks})
    })
  }
  updateQuery = (query) => {
    this.setState({query: query.trim()})
    if(query){
      this.createSearchedBookList(query)
    }
    else{
      this.setState({searchedBooks: [] })
    }

  }


  render(){
        const { query, searchedBooks} = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
              <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {searchedBooks.map((book) =>(
            <li key={book.id} className='book'>
              <div className='book-top'>
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <MoveBook bookId={book.id}/>
              </div>
              <div className='book-title'>{book.title}</div>
              <div className='book-authors'>{book.authors}</div>
            </li>
          ))}



          </ol>
        </div>
    </div>
    )
  }
}

export default AddBook


/*


*/
