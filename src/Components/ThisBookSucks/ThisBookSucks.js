import React, { Component } from 'react';
import './ThisBookSucks.css';
import Header from './Header/Header';
import { ToRead } from './ToRead';
import { BookDetails } from './BookDetails';
import { Browse } from './Browse';
import { SignOut } from './SignOut';
import { AccountSettingsButton } from './AccountSettingsButton';
import { getUserInfo } from './getUserInfo';
//looks for index.js in ToRead directory

export default class ThisBookSucks extends Component {
  constructor() {
    super();
    this.state = {name: undefined};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    getUserInfo()
    .then((response)=>{
      return response.json();
    }).then((json)=>{
      this.setState({name: json.info.name})
    })
  }

  render() {
    return (
      <div className="main-app-area">
      <Header userName={this.state.name}/>
      <Browse />
      <ToRead />
      <AccountSettingsButton />
      <SignOut logInOutFunc={this.props.logInOutFunc}/>
      <BookDetails />
      </div>
    )
  }
}
