import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoveBook from './MoveBook'

class ListBooks extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  updateExternalBook = (shelfTitle,bookId) => {
  //  this.setState({shelfTitle: shelfTitle.trim()})
  if(this.props.updateExternalBookList)
    this.props.updateExternalBookList(shelfTitle,bookId)
  }
  render(){
    const {books} = this.props
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book) =>(
          <li key={book.id} className='book'>
            <div className='book-top'>
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <MoveBook
                bookId={book}
                updateExternalShelfTitle={(shelfTitle,bookId) =>{
                  this.updateExternalBook(shelfTitle,bookId)
                }}/>
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


/*


*/
