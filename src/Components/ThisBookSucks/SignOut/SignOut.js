import React, { Component } from 'react';
import './SignOut.css';

export default class SignOut extends Component {

  render() {
    return (
      <div className="sign-out" onClick={()=>
      this.props.logInOutFunc(false)}>
        Sign Out
      </div>
    );
  }
}
