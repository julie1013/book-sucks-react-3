import React, { Component } from 'react'
import './SignUpIn.css'
import { logIn } from './auth'

export default class SignUpIn extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    // telling this function that this is SignUpIn Component
    // binds handleSubmit to SignUpIn Component (context)
  }
  handleSubmit (event) {
    event.preventDefault()
    let formPayload = {
      email: event.target.children[0].value,
      password: event.target.children[1].value
    }
    logIn(formPayload)
    .then((response) => {
      if (response.status === 201) {
        this.props.loginFunc()
      } else {
        alert('login failed!')
      }
    })
    // this.setState;
  }

  render () {
    return (
      <div className='temp-sign-up'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' />
          <input type='password' />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}
