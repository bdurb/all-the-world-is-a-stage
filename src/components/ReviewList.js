import React, { Component } from 'react';
import Review from './Review';
import axios from 'axios';

import './ReviewList.css'

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

  handleLowestSort = () => {
    let resultsCopy = [...this.state.results]
    resultsCopy.sort((a, b) => {
      return a.rating - b.rating
    })
    this.setState({results: resultsCopy})
  }

  handleHighestSort = () => {
    let resultsCopy = [...this.state.results]
    resultsCopy.sort((a, b) => {
      return b.rating - a.rating
    })
    this.setState({results: resultsCopy})
  }

  render() { 
    return (
      <div className='reviews'>
        <h1>No Legacy is so rich as honesty</h1>
        <h2>A review site dedicated to the works of Shakespeare</h2>
        <div className='buttons'>
          <button onClick={this.handleLowestSort}>Lowest</button>
          <button onClick={this.handleHighestSort}>Highest</button>
        </div>
        {this.state.results.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    );
  }
}
 
export default ReviewList;