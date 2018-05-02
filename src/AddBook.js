import React, { Component } from 'react'
import MoveBook from './MoveBook'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class AddBook extends Component{
  state ={
    searchedBooks: [],
    query: ''
  }


  createSearchedBookList = (query) => {
    BooksAPI.search(query).then( (sBooks) => {
      if(sBooks && sBooks.length >0){
        const tempBooks = sBooks.map((sbk) => {
          const isShelfBook = this.props.shelfBooks.find((bk) => bk.id === sbk.id)
          sbk.shelf = isShelfBook ? isShelfBook.shelf : 'none'
          return sbk
        });
        this.setState({searchedBooks: tempBooks})
          console.log(this.state.searchedBooks)
      }



    })
  };
/*
BooksAPI.search(this.state.query).then( (searchedBooks) => {
  if(searchedBooks && searchedBooks.length >0){
    const tempSearchedBooks = searchedBooks.map((sbk) => {
      const existingBook = this.props.shelfBooks.find((bk) => bk.id === sbk.id)
      console.log(existingBook)
      sbk.shelf = existingBook ? existingBook.shelf : 'none'
      console.log(sbk.shelf)
      return sbk
    });
      this.setState({searchedBooks: tempSearchedBooks})
      this.setState({query: ""})
  }

})
*/

    updateQuery = (query) => {
      if(query && query.length >0){
        this.setState({query: query})
        this.createSearchedBookList(query)

      }
      else{
        this.setState({query: ''})
         this.setState({searchedBooks: [] })
      }

    };

  setDefaultImage = (books) => {
    const defaultImage ="none"
    if(books.imageLinks)
     return `url(${books.imageLinks.thumbnail})`
    else
      return `url(${defaultImage})`
   };

  render(){
        const {searchedBooks,query} = this.state
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
