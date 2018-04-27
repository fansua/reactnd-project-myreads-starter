import React, { Component } from 'react'



class MoveBook extends Component{

  state = {

    shelfTitle: ''
  }
  shelfTitles = {
    "currentlyReading": "currentlyReading",
    "wantToRead": "wantToRead",
    "read": "read",
    "none": "none"
  }

/*  updateShelfTitle = (shelfTitle,book) => {
    this.setState({shelfTitle: shelfTitle.trim()})
    this.updateExternalShelfTitle(shelfTitle,book)
handleChange
  }*/
  updateShelfTitle = (shelf, book)=> {
    console.log("before assignment")
    console.log(book)
    if(this.props.onChangeBookData)
     this.props.onChangeBookData(shelf,book)
  }
  setDefaultShelf = (book) => {
    const defaultShelf ="none"
    if(book.shelf)
     return book.shelf
    else
      return defaultShelf
   }

  render(){
    const {bookData} = this.props

    return(
      <div className="book-shelf-changer">
        <select value={bookData.shelf || 'none'} onChange={(event) => this.updateShelfTitle(event.target.value,bookData)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default MoveBook
