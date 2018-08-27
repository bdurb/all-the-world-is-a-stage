import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    }
  }

  componentDidMount() {
    axios.get(`http://shakespeare.podium.co/api/reviews/${this.props.location.state.id}`, {
      headers: { authorization: 'koOheljmQX' }
    })
    .then(res => {
      this.setState({review: res.data.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() { 
    return (
      <div className='details'>
        <p>"{this.state.review.body}"</p>
        <p>-{this.state.review.author}</p>
        <button onClick={() => {this.props.history.push('/')}}>Back</button>
      </div>
    );
  }
}
 
export default withRouter(Details);