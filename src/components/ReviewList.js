import React, { Component } from 'react';
import Review from './Review';
import axios from 'axios';

class ReviewList extends Component {
  state = {
    results: []
  }

  componentDidMount() {
    axios.get('http://shakespeare.podium.co/api/reviews', {
      headers: { authorization: 'koOheljmQX' }
    })
    .then(res => {
      this.setState({results: res.data.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() { 
    return (
      <div>
        {this.state.results.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    );
  }
}
 
export default ReviewList;