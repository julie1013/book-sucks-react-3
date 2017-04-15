import React, { Component } from 'react';
import './BookDetails.css';
import { Reviews } from './Reviews';
import { ToggleRemoveReAdd } from './ToggleRemoveReAdd';
import { WriteReviewButton } from './WriteReviewButton';

export default class BookDetails extends Component {
  render() {
    return (
      <div className="book-details">
        {this.props.bookSelected.title}
        {this.props.bookSelected.synopsis}
        <ToggleRemoveReAdd />
        <WriteReviewButton />
        <Reviews />
      </div>
    );
  }
}
