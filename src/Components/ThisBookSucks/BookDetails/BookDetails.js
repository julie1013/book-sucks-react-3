import React, { Component } from 'react';
import './BookDetails.css';
import { Reviews } from './Reviews';
import { ToggleRemoveReAdd } from './ToggleRemoveReAdd';
import { WriteReviewButton } from './WriteReviewButton';
import  ReviewsForm from './ReviewsForm/ReviewsForm';
import { getBookReviews, addYourReview } from '../network';

export default class BookDetails extends Component {
  constructor(){
    super();
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.toggleReviewsForm = this.toggleReviewsForm.bind(this);
    this.addLocalReview = this.addLocalReview.bind(this);
    this.state = {
      reviews: [],
      showReviewsForm: false
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedBook){
      getBookReviews(nextProps.selectedBook.id)
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
        this.setState({
          reviews: json.reviews
        })
      })
    }
  }

  renderReviews(){
    return this.state.reviews.map((review)=>{
      return(
        <div>
          {review.body}
        </div>
      )
    })
  }

  toggleReviewsForm(){
    this.setState({
      showReviewsForm: !this.state.showReviewsForm
    })
  }

  addLocalReview(review){
    this.setState({
      reviews: this.state.reviews.concat([review])
    })
  }

  render() {
    return (
      <div className="book-details">
        {this.props.selectedBook
          ? <div>
              <h1 className="title">{this.props.selectedBook.title}</h1>
              <p className="synopsis">{this.props.selectedBook.synopsis}</p>
            </div>
          : <p className="synopsis">No book selected</p>
        }

        {this.props.list.length > 0
          ? <div>
              <ToggleRemoveReAdd />
              <WriteReviewButton
                toggleReviewsFormFunc={this.toggleReviewsForm}
              />
            </div>
          : null
        }
        <Reviews
          renderReviewsFunc={this.renderReviews}
        />
        {this.state.showReviewsForm
          ? <ReviewsForm toggleReviewsFormFunc={this.toggleReviewsForm}
                          selectedBook={this.props.selectedBook}
                          addLocalReviewFunc={this.addLocalReview}
          />
          : null
        }
      </div>
    );
  }
}
