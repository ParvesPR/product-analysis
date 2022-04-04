import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, img, ratings, comment } = review;
    return (
        <div className='single-review'>
            <img src={img} alt="" />
            <div className='review-text'>
                <h3>Name: {name}</h3>
                <h4>Ratings: {ratings} / 5 stars</h4>
                <p>Customer Review: {comment}</p>
            </div>
        </div>


    );
};

export default Review;