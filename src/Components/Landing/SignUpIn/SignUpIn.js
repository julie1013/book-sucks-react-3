import React, { Component } from 'react'
import './SignUpIn.css'
import { logIn } from './auth'

export default class SignUpIn extends Component {
  constructor () {
    super()
    // We are binding the CONTEXT of the handleSubmit function
    // to be THIS instance or the SignUpIn component. That is
    // why is is called 'this' because its referring to
    // THIS object that whatever function we are talking about lives in
    // .bind(<obj>) lets you change this.
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {loginError: false}
  }
  handleSubmit (event) {
    // we need to tell the browser its not 1999 anymore and there
    // are different plans for this submit button. We call
    // prevent default to do that.
    event.preventDefault()
    // are creating a local variable named formPayload. We are setting it to
    // be a new object with the keys 'email' and 'password' which we pull the
    // values from the form submit event and its <input> children.
    let formPayload = {
      email: event.target.children[0].value,
      password: event.target.children[1].value
    }

    let authenticated = false;

    logIn(formPayload)
    .then((response) => {
        // the http responses code
      if (response.status === 201) {
        authenticated = true;
        return response.json();
        // We are executing a prop passed in from our parent component. Remember,
        // props can be functions, object, strings or numbers. I find it helpful
        // to denote the function ones somehow with a 'somethingFunc' name.
      } else {
        // if its a bad code.. tell the user somehow
        this.setState({loginError: true});
      }
    })
    .catch(function(err){
      throw new Error("The server is down")
      .then(alert("The server is down"));
    })
      .then((json)=>{
        if (authenticated === true){
          window.localStorage.token = json.jwt;
          this.props.logInOutFunc(true);
        }
      })
  }

  render () {
    return (
      <div>
        <div className="sign-in">
          <form onSubmit={this.handleSubmit}>
            <input type="text" />
            <input type="password" />
            <button type="submit">Sign In</button>
          </form>
          {this.state.loginError
            ? <div className="failed">
              <h1>LOG IN FAILED!!!! YOU TOOL!</h1>
            </div>
            : null
          }
        </div>
        <div className="sign-up">
          <h3>Not registered yet? Sign up!</h3>
          <form>
          <label for="email">Email</label>
            <input type="text" name="email"/>
            <input type="password" />
            <input type="password" />
            <input type="text" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}
