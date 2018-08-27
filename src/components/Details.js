import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
  constructor(props) {
    console.log(props)
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
      <div>
        <h1>Hello</h1>
        {this.state.review.body}
        {this.state.review.author}
      </div>
    );
  }
}
 
export default Details;