import React from 'react';

const Review = (props) => {
  return (
    <div>
      {props.review.rating}
      {props.review.author}
    </div>
  );
}
 
export default Review;