import React, { Component } from 'react';
import './BookSearch.css';

export default class BookSearch extends Component {
  constructor(){
    super();
    this.renderBooks = this.renderBooks.bind(this);
  }

  renderBooks() {
    return this.props.books.map((book)=>{
      return (
        <div>
          <div>{book.title}, by {book.author}
            <div className="add-book-btn" onClick={()=>{
              this.props.addBookToListFunc(book.id);
            }}>Add Book</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="message-background slideDown">
      <div className="close-btn" onClick={()=>{
        this.props.toggleBrowseFunc();
      }}>
        X
      </div>
        <div className="message-container">
          {this.renderBooks()}
        </div>
      </div>
    );
  }
}
