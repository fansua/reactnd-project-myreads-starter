import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class DisplayShelfHeaders extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }


  render(){
    const {books, onChangeBookData} = this.props
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            <ListBooks
              books={books.filter((book)=> book.shelf === 'currentlyReading')}
              onUpdateBook={onChangeBookData}
            />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
            <ListBooks
              books={books.filter((book)=> book.shelf === 'wantToRead')}
              onUpdateBook={onChangeBookData}
            />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
            <ListBooks
              books={books.filter((book)=> book.shelf === 'read')}
              onUpdateBook={onChangeBookData}
            />
        </div>
      </div>
    )
  }
}

export default DisplayShelfHeaders
