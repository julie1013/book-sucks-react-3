import React, { Component } from 'react';
import './ThisBookSucks.css';
import Header from './Header/Header';
import { ToRead } from './ToRead';
import { BookDetails } from './BookDetails';
import { getUserInfo, getBooks } from './network';
import BookSearch from './BookSearch/BookSearch';
//looks for index.js in ToRead directory

export default class ThisBookSucks extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      books: [],
      showBrowse: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleBrowse = this.toggleBrowse.bind(this);
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
      })
  }

  toggleBrowse(){
    this.setState({
      showBrowse: !this.state.showBrowse
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
          />
        : null
      }
      <ToRead />
      <BookDetails />
      </div>
    )
  }
}
