import React, { Component } from 'react';
import './ThisBookSucks.css';
import { ToRead } from './ToRead';
import { BookDetails } from './BookDetails';
//looks for index.js in ToRead directory

export default class ThisBookSucks extends Component {
  render() {
    return (
      <div className="main-app-area">
      <ToRead />
      <BookDetails />
      </div>
    )
  }
}
