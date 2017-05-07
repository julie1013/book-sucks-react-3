import React, { Component } from 'react';
import { addYourReview } from '../../network'
import './ReviewsForm.css';

export default class ReviewsForm extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let id = this.props.selectedBook.id
    addYourReview({
      rating: 5,
      body: event.target.children[0].value,
      id: id
    })
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      this.props.addLocalReviewFunc(json.review);
    })
  }

  render(){
    return(
      <div className="reviewform-background slideDown">
        <div className="close-btn" onClick={() => {
          this.props.toggleReviewsFormFunc()
        }}>
          X
        </div>
        <div className="message-container">
          <form onSubmit={this.handleSubmit}>
            <textarea rows="25" className="reviews-container">
            </textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    );
  }
}
