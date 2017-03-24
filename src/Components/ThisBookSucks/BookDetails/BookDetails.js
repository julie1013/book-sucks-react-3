import React, { Component } from 'react';
import './BookDetails.css';
import { Reviews } from './Reviews';
import { ToggleRemoveReAdd } from './ToggleRemoveReAdd';


export default class BookDetails extends Component {
  render() {
    return (
      <div className="book-details">
        BOOK DETAILS
        <ToggleRemoveReAdd />
        <Reviews />
      </div>
    );
  }
}
