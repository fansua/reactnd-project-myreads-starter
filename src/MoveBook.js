import React, { Component } from 'react'


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
  updateShelfTitle = (shelfTitle,bookId) => {
  //  this.setState({shelfTitle: shelfTitle.trim()})
  console.log(typeof bookId)
  if(this.props.updateExternalShelfTitle)
    this.props.updateExternalShelfTitle(shelfTitle,bookId)
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
