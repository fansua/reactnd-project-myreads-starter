import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DisplayShelfHeaders from './DisplayShelfHeaders'

class CreateShelfCase extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.array.isRequired
  }

  render(){

    const {books, shelfTitle} = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <DisplayShelfHeaders books={books} shelfTitle={shelfTitle} />
        </div>
    </div>
    )
  }
}

export default CreateShelfCase


/*


*/
