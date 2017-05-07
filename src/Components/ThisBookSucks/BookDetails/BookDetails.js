import React, { Component } from 'react';
import './BookDetails.css';
import { Reviews } from './Reviews';
import { ToggleRemoveReAdd } from './ToggleRemoveReAdd';
import { WriteReviewButton } from './WriteReviewButton';
import  ReviewsForm from './ReviewsForm/ReviewsForm';
import EditReviewForm from './EditReviewForm/EditReviewForm';
import { getBookReviews, deleteYourReview, editYourReview } from '../network';

export default class BookDetails extends Component {
  constructor(){
    super();
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.toggleReviewsForm = this.toggleReviewsForm.bind(this);
    this.addLocalReview = this.addLocalReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.editReview = this.editReview.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.state = {
      reviews: [],
      showReviewsForm: false,
      selectedReview: false
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

  deleteReview(id){
    deleteYourReview(id)
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      this.setState({
        reviews: this.state.reviews.filter((review)=>{
          if (json.deleted === review.id){
            return false;
          } else {
            return true;
          }
        })
      })
    })
  }

  toggleEditForm(review){
    this.setState({
      selectedReview: review
    })
  }

  editReview(id, body){
    editYourReview({
      id: id,
      body: body
    })
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      let newReviewArray = [];
      this.state.reviews.forEach((review)=>{
        if(review.id === json.review.id){
          review.body = json.review.body;
        }
        newReviewArray.push(review);
        this.setState({
          reviews: newReviewArray
        })
      })
    })
  }

  renderReviews(){
    return this.state.reviews.map((review)=>{
      return(
        <div>
          {review.username} wrote:
          <br></br>
          {review.body}
          <div className="edit-review-btn" onClick={()=>{
            this.toggleEditForm(review);
          }}>EDIT REVIEW</div>
          <div className="delete-review-btn" onClick={()=>{
            this.deleteReview(review.id)
          }}>DELETE REVIEW</div>
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
        {this.state.selectedReview
          ? <EditReviewForm
            toggleEditFormFunc={this.toggleEditForm}
            editReviewFunc={this.editReview}
            selectedReview={this.state.selectedReview}
          />
          : null
        }
      </div>
    );
  }
}
