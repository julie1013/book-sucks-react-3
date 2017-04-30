import React, { Component } from 'react';
import './BurningBook.css';

export default class BurningBook extends Component {
  render() {
    return (
      <div className="burning-book">
        <img src={("../../../images/bookburning.jpg")} alt="book burning" />
        <h1>THIS BOOK SUCKS!</h1>
        <h3>Is your to-read list too long?
          <br />
          How do you decide which books to skip?
          <br />
          Join to find out which books just <span className="suck">SUCK!</span>
        </h3>
      </div>
    );
  }
}
