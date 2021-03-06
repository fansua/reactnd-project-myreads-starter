import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DisplayShelfHeaders from './DisplayShelfHeaders'

class CreateShelfCase extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render(){

    const {books,onMoveBook} = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <DisplayShelfHeaders
              books={books}
              onChangeBookData={onMoveBook}
            />
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
    </div>
    )
  }
}

export default CreateShelfCase
