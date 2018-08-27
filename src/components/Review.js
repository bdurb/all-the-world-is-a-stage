import React from 'react';
import { Link } from 'react-router-dom';

const Review = (props) => {
  return (
    <div>
      <Link style={{textDecoration: 'none', color: 'black'}}
        to={{
        pathname:'/details',
        state: props.review
        }} >
      {props.review.rating}
      {props.review.author}
      </Link>
    </div>
  );
}
 
export default Review;