import React, { Component } from 'react';
import './Browse.css';

export default class Browse extends Component {
  render(){
    return (
      <div className="browse" onClick={()=>{
        this.props.toggleBrowseFunc();
      }}>
      Browse Books
      </div>
    );
  }
}
