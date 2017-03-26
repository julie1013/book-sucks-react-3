import React, { Component } from 'react';
import './SignUpIn.css';
import { logIn } from './auth';

export default class SignUpIn extends Component {
  constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this);
    //telling this function that this is SignUpIn Component
    //binds handleSubmit to SignUpIn Component (context)
  }
  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      email: event.target.children[0].value,
      password: event.target.children[1].value
    }
    logIn(formPayload)
    // this.setState;
  }

  render(){
    return (
      <div className="temp-sign-up">
          <form onSubmit={this.handleSubmit}>
            <input type="text"></input>
            <input type="password"></input>
            <button type="submit">Sign In</button>
          </form>
      </div>
    );
  }
}
