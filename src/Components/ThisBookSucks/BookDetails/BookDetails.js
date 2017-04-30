import React, { Component } from 'react';
import './BookDetails.css';
import { Reviews } from './Reviews';
import { ToggleRemoveReAdd } from './ToggleRemoveReAdd';
import { WriteReviewButton } from './WriteReviewButton';

export default class BookDetails extends Component {
  render() {
    return (
      <div className="book-details">
        {this.props.bookSelected
          ? <div>
              <h1 className="title">{this.props.bookSelected.title}</h1>
              <p className="synopsis">{this.props.bookSelected.synopsis}</p>
            </div>
          : <p className="synopsis">No book selected</p>
        }

        {this.props.list.length > 0
          ? <div>
              <ToggleRemoveReAdd />
              <WriteReviewButton />
            </div>
          : null
        }
        <Reviews />
      </div>
    );
  }
}
