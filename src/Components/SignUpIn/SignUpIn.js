import React, { Component } from 'react';


export default class SignUpIn extends Component {
  render(){
    return (
      <div className="temp-sign-up" onClick={()=>this.props.loginFunc()}>TEMPORARY GO TO APP!</div>
    )
  }
}
