import React, { Component } from 'react';
import './ThisBookSucks.css';
import { ToRead } from './ToRead';
import { BookDetails } from './BookDetails';
import { Browse } from './Browse';
import { SignOut } from './SignOut';
import { AccountSettings } from './AccountSettings';
//looks for index.js in ToRead directory

export default class ThisBookSucks extends Component {
  render() {
    return (
      <div className="main-app-area">
      <Browse />
      <ToRead />
      <AccountSettings />
      <SignOut />
      <BookDetails />
      </div>
    )
  }
}
