import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class MoveBook extends Component{

  state = {

    shelfTitle: ''
  }
  shelfTitles = {
    "currentlyReading": "currentlyReading",
    "wantToRead": "wantToRead",
    "read": "read",
    "none": "none",
  }

  updateExternalShelfTitle = (shelfTitle,book) => {
    BooksAPI.update(book,shelfTitle).then( (postResponse) => {
      console.log("The post Response is")
      console.log(postResponse)
    })
  }
  updateShelfTitle = (shelfTitle,book) => {
    this.setState({shelfTitle: shelfTitle.trim()})
    this.updateExternalShelfTitle(shelfTitle,book)
  }

  render(){
    const {bookId} = this.props
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => this.updateShelfTitle(event.target.value,bookId)}>
          <option value="none" disabled>Move to...</option>
          <option value={this.shelfTitles.currentlyReading}>Currently Reading</option>
          <option value={this.shelfTitles.wantToRead}>Want to Read</option>
          <option value={this.shelfTitles.read}>Read</option>
          <option value={this.shelfTitles.none}>None</option>
        </select>
      </div>
    )
  }
}

export default MoveBook

/*


*/
