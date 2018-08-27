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
        {props.review.rating}
        {props.review.author}
      </div>
    </Link>
  );
}
 
export default Review;