import React from "react";
import { ProductReview } from "../models/productReview";
import { StarRating } from "./StarRating.jsx";

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            userName: '',
            rating: 0,
            comment: '',
        }
    }

    handleFormSubmit () {
        if (this.state.userName !== "" && this.state.rating !== 0 && this.state.comment !== "") {
            this.props.onReviewAdded(new ProductReview(this.state.userName, this.state.rating, this.state.comment, new Date().toDateString()))
            this.setState( {
                userName: '',
                rating: 0,
                comment: '',
            })
        }
    }

    render () {
        return (
            <div className="review-form-wrapper">
                <form name="review-form" className="review-form">
                    <div className="review-form-header">
                        Add Review
                    </div>
                    <div className="review-form-body">
                        <div className="form-field">
                            <label htmlFor="name">Name</label>
                            <input id="name" value={this.state.userName}  className="form-input" type="text" onChange={ e => this.setState( { userName: e.target.value })}></input>
                        </div>
                        <div className="form-field">
                            <label htmlFor="stars">Rating</label>
                            <div id="stars-input-wrapper">
                                <select id="stars" value={this.state.rating} className="form-input" onChange={ e => this.setState( { rating: e.target.value })}>
                                <option value=""></option>
                                <option value="1">1 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                                </select>
                                <StarRating value={this.state.rating} />
                            </div>
                        </div>
                        <div id="comment-input" className="form-field">
                            <label htmlFor="comment">Comment</label>
                            <textarea id="comment" value={this.state.comment} className="form-input" rows="6" onChange={ e => this.setState( { comment: e.target.value })}></textarea>
                        </div>
                        <div className="button" onClick= { event => this.handleFormSubmit() }>Post Review</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ReviewForm;