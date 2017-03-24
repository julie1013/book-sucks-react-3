import React, { Component } from 'react';
import './ThisBookSucks.css';
import { ToRead } from './ToRead';
//looks for index.js in ToRead directory

export default class ThisBookSucks extends Component {
  render() {
    return (
      <div className="main-app-area">
      <ToRead />
      </div>
    )
  }
}
