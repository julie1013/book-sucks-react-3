import React, { Component } from 'react';
import './ToRead.css';
import { getUserInfo } from '../getUserInfo';

export default class ToRead extends Component {
  constructor(){
    super();
    this.state = {numBooks: undefined}
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    getUserInfo()
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      this.setState({numBooks: json.info.numberOfReads})
    })
  }

  render() {
    return (
      <div className="to-read">
      {this.state.numBooks + ' books to read!'} 
      </div>
    )
  }
}
