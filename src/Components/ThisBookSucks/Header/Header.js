import React, { Component } from 'react';
import './Header.css';
import { Browse } from './Browse';

export default class Header extends Component {
  render() {
    return(
      <div className="header">
      <Browse />
        {this.props.userName}
      </div>
    );
  }
}
