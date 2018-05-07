import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoveBook from './MoveBook'

class ListBooks extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  setDefaultImage = (books) => {
    const defaultImage ="none"
    if(books.imageLinks)
     return `url(${books.imageLinks.thumbnail})`
    else
      return `url(${defaultImage})`
   };

  render(){
    const {books,onUpdateBook } = this.props
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book) =>(
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
    )
  }
}

export default ListBooks
