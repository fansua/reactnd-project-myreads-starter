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
    if(this.props.onChangeBookData)
     this.props.onChangeBookData(shelf,book)
  }

  render(){
    const {bookData} = this.props

    return(
      <div className="book-shelf-changer">
        <select defaultValue={bookData.shelf} onChange={(event) => this.updateShelfTitle(event.target.value,bookData)}>
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
