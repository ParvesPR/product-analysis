import React from 'react';
import useReviews from '../../hooks/useReviews';
import Header from '../Header/Header';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReviews();
   
    return (
        <div>
             <Header></Header>
            <h1 className='reviews-title'>What our Customers say!</h1>
            <div className='reviews'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;