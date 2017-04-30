import React, { Component } from 'react';
import './BookDetails.css';
import { Reviews } from './Reviews';
import { ToggleRemoveReAdd } from './ToggleRemoveReAdd';
import { WriteReviewButton } from './WriteReviewButton';
import { getBookReviews } from '../network';

export default class BookDetails extends Component {
  constructor(){
    super();
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.state = {
      reviews: []
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.bookSelected){
      getBookReviews(nextProps.bookSelected.id)
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
        <Reviews
          renderReviewsFunc={this.renderReviews}
        />
      </div>
    );
  }
}
