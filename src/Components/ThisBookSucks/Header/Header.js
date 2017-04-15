import React, { Component } from 'react';
import './Header.css';
import { Browse } from './Browse';
import { AccountSettingsButton } from './AccountSettingsButton';
import { SignOut } from './SignOut';

export default class Header extends Component {
  render() {
    return(
      <div className="header">
      <Browse toggleBrowseFunc={this.props.toggleBrowseFunc}/>
      <AccountSettingsButton />
      <SignOut logInOutFunc={this.props.logInOutFunc}/>
        {this.props.userName}
      </div>
    );
  }
}
