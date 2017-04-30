import React, { Component } from 'react';
import './Reviews.css';

export default class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
      REVIEWS
      {this.props.renderReviewsFunc()}
      </div>
    )
  }
}
