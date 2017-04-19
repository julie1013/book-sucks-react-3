import React, { Component } from 'react';
import './ToRead.css';
import { getUserInfo, getList } from '../network';

export default class ToRead extends Component {
  constructor(){
    super();
    this.state = {
      numBooks: undefined,
    }
    this.renderToReadList = this.renderToReadList.bind(this);
  }

  renderToReadList(){
    return this.props.list.map((book)=>{
      return (
        <div className="book-to-read" key={book.id} onClick={()=>{
          this.props.setSelectedBookFunc(book.id);
        }}>
          {book.title}, by {book.author}
          <div className="remove-book-btn" onClick={()=>{
            this.props.removeBookFromListFunc(book.id);
          }}>
            REMOVE THIS SHIT
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="to-read">
        <h1 className="number-books">{this.props.list.length + ' books to read!'}</h1>
        {this.renderToReadList()}
      </div>
    )
  }
}
