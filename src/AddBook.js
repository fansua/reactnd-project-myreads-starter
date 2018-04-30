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
    BooksAPI.search(query).then( (searchedBooks) => {
      console.log(searchedBooks)
      this.setState({searchedBooks: searchedBooks})
    })
  }

    updateQuery = (query) => {
      if(query && query.length >0){
        this.setState({query: query.trim()})
        this.createSearchedBookList(query)
      }
      else{
        this.setState({query: ''})
         this.setState({searchedBooks: [] })
      }

    }
    updateSearchedBookList =(shelf,book)=>{
         let tempSearchedList= this.state.searchedBooks.filter((bk)=> (bk.id !== book.id))
          book.shelf = shelf
          tempSearchedList.push(book)
          this.setState({searchedBooks: tempSearchedList})
          this.setState({query: ""})
    }

  setDefaultImage = (books) => {
    const defaultImage ="none"
    if(books.imageLinks)
     return `url(${books.imageLinks.thumbnail})`
    else
      return `url(${defaultImage})`
   }

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

                    onUpdatesearchedBooks={(shelf,book) =>{
                      this.updateSearchedBookList(shelf,book)
                    }}
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
