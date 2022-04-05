import React from 'react';
import './HomeReviews.css';
const HomeReviews = ({ review }) => {
    const { name, img, comment, ratings } = review;
    return (
        <div className='home-review'>
            <img src={img} alt="" />
            <div className='home-review-text'>
                <h3>Name: {name}</h3>
                <h4>Ratings: {ratings} / 5</h4>
                <p>Customer Review: {comment}</p>
            </div>
        </div>
    );
};

export default HomeReviews;