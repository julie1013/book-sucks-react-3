import React, { Component } from 'react';
import './App.css';
import { SignUpIn } from './Components/SignUpIn';
import { ThisBookSucks } from './Components/ThisBookSucks';

class App extends Component {
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
      <div className="App">
      {this.state.loggedIn
        ? <ThisBookSucks />
        : <SignUpIn loginFunc={this.logIn}/>}
      </div>
    );
  }
}

export default App;
