import React, { Component } from 'react';
import './WriteReviewButton.css';

export default class WriteReviewButton extends Component {
  render() {
    return (
      <div className="write-review-button" onClick={()=>{
        this.props.toggleReviewsFormFunc()
      }}>
      WRITE A REVIEW?
      </div>
    );
  }
}
