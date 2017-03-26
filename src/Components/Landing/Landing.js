import React, { Component } from 'react';
import './Landing.css';
import SignUpIn from './SignUpIn/SignUpIn';
import { ThisBookSucks } from '../../Components/ThisBookSucks';
import { BurningBook } from './BurningBook';

export default class Landing extends Component {
  constructor() {
    super();
    this.state={loggedIn: false}
    this.logIn=this.logIn.bind(this);
  }

  logIn(){
    this.setState({loggedIn: true})
  }

  render() {
    return (
      <div className="landing">
        {this.state.loggedIn
          ? <ThisBookSucks />
          : <SignUpIn loginFunc={this.logIn}/>}
          <BurningBook />
      </div>
    );
  }
}
