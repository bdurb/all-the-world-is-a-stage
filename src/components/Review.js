import React from 'react';
import { Link } from 'react-router-dom';

import './Review.css'

const Review = (props) => {
  return (
    <Link style={{textDecoration: 'none', color: 'black'}}
      to={{
        pathname:'/details',
        state: props.review
      }} >
      <div className='review-link'>
        <p>{props.review.rating}</p>
        <p>{props.review.author}</p>
      </div>
    </Link>
  );
}
 
export default Review;