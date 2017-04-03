import React, { Component } from 'react';
import './Header.css';
import { Browse } from './Browse';
import { AccountSettingsButton } from './AccountSettingsButton';

export default class Header extends Component {
  render() {
    return(
      <div className="header">
      <Browse />
      <AccountSettingsButton />
        {this.props.userName}
      </div>
    );
  }
}
