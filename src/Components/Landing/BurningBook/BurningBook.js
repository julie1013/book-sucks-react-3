import React, { Component } from 'react';
import './BurningBook.css';
import BurningBookPic from '../../../images/bookburning.jpg';

export default class BurningBook extends Component {
  render() {
    return (
      <div className="burning-book">
        <img src={BurningBookPic} alt="book burning" />
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
