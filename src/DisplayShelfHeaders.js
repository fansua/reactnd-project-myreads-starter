import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class DisplayShelfHeaders extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  updateExternalBook = (shelfTitle,bookId) => {
  //  this.setState({shelfTitle: shelfTitle.trim()})
  if(this.props.updateExternalBooks)
    this.props.updateExternalBooks(shelfTitle,bookId)
  }
  render(){
    const {books} = this.props

    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            <ListBooks
            books={books.filter((book)=> book.shelf === 'currentlyReading')}
            updateExternalBookList={(shelfTitle,bookId) =>{
              this.updateExternalBook(shelfTitle,bookId)
            }}
            />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
            <ListBooks
            books={books.filter((book)=> book.shelf === 'wantToRead')}
            updateExternalBookList={(shelfTitle,bookId) =>{
              this.updateExternalBook(shelfTitle,bookId)
            }}
            />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
            <ListBooks
            books={books.filter((book)=> book.shelf === 'read')}
            updateExternalBookList={(shelfTitle,bookId) =>{
              this.updateExternalBook(shelfTitle,bookId)
            }}
            />
        </div>
      </div>
    )
  }
}

export default DisplayShelfHeaders


/*


*/
