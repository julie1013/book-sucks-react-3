import React, { Component } from 'react';
import './SignUpIn.css';

export default class SignUpIn extends Component {
  render(){
    return (
      <div className="temp-sign-up"
        onClick={()=>
          this.props.loginFunc()}>
          LOGIN PLACEHOLDER
      </div>
    )
  }
}
