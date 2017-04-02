import React, { Component } from 'react';
import './Landing.css';
import SignUpIn from './SignUpIn/SignUpIn';
import { ThisBookSucks } from '../../Components/ThisBookSucks';
import { BurningBook } from './BurningBook';

export default class Landing extends Component {
  constructor() {
    super();
    this.logInOut=this.logInOut.bind(this);
    this.state={loggedIn: false}
  }

  logInOut(boolean) {
    this.setState({loggedIn: boolean});
  }

  render() {
    return (
      <div className="landing">
        {this.state.loggedIn
          ? <ThisBookSucks logInOutFunc={this.logInOut}/>
          : <div><SignUpIn logInOutFunc={this.logInOut}/> <BurningBook /></div>}
      </div>
    );
  }
}
