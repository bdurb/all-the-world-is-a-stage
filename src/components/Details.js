import React, { Component } from 'react';
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
        "{this.state.review.body}"<br/><br/>
        -{this.state.review.author}
      </div>
    );
  }
}
 
export default Details;