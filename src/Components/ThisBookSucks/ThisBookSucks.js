import React, { Component } from 'react';
import './ThisBookSucks.css';
import Header from './Header/Header';
import { ToRead } from './ToRead';
import { BookDetails } from './BookDetails';
import { getUserInfo, getBooks, getList, addToList, removeFromList } from './network';
import BookSearch from './BookSearch/BookSearch';
//looks for index.js in ToRead directory

export default class ThisBookSucks extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      books: [],
      list: [],
      showBrowse: false,
      bookSelected: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleBrowse = this.toggleBrowse.bind(this);
    this.addBookToList = this.addBookToList.bind(this);
    this.getListofBooks = this.getListofBooks.bind(this);
    this.removeBookFromList = this.removeBookFromList.bind(this);
    this.setSelectedBook = this.setSelectedBook.bind(this);
  }

  componentDidMount(){
    getUserInfo()
    .then((response)=>{
      return response.json();
    }).then((json)=>{
      this.setState({name: json.info.name})
    });
    getBooks()
      .then((response)=>{
        return response.json();
      }).then((json)=>{
        this.setState({books: json.books})
      });
    this.getListofBooks();
  }

  toggleBrowse(){
    this.setState({
      showBrowse: !this.state.showBrowse
    })
  }

  getListofBooks() {
    getList()
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      this.setState({list: json.books})
    })
  }

  addBookToList(id){
    addToList({
      id: id
    })
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      this.getListofBooks();
    })
  }

  removeBookFromList(id){
    removeFromList(id)
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      this.getListofBooks();
    })
  }

  setSelectedBook(id){
    this.state.list.forEach((book)=>{
      if(id === book.id){
        this.setState({ bookSelected: book });
      }
    })
  }

  render() {
    return (
      <div className="main-app-area">
      <Header userName={this.state.name} logInOutFunc={this.props.logInOutFunc}
      toggleBrowseFunc={this.toggleBrowse}
      />
      {this.state.showBrowse
        ? <BookSearch toggleBrowseFunc={this.toggleBrowse}
                      books={this.state.books}
                      addBookToListFunc={this.addBookToList}
          />
        : null
      }
      <ToRead list={this.state.list}
              removeBookFromListFunc={this.removeBookFromList}
              setSelectedBookFunc={this.setSelectedBook}
      />
      <BookDetails bookSelected={this.state.bookSelected}
                   list={this.state.list}
      />
      </div>
    )
  }
}
