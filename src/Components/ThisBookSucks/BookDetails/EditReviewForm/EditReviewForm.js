import React, { Component } from 'react';
import './EditReviewForm.css';

export default class EditReviewForm extends Component {
  render(){
    return(
      <div className="reviewform-background slideDown">
        <div className="close-btn" onClick={()=>{
          this.props.toggleEditFormFunc(false);
        }}>
          X
        </div>
        <div className="message-container">
          <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.editReviewFunc(this.props.selectedReview.id, event.target.children[0].value);
          }}>
            <textarea rows="25" defaultValue={this.props.selectedReview.body} className="reviews-container">
            </textarea>
            <button type="submit">Edit Review</button>
          </form>
        </div>
      </div>
    );
  }
}
