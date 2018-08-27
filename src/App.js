import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReviewList from './components/ReviewList';

class App extends Component {
  render() {
    return (
      <div>
       <Route exact path ='/' component={ReviewList} />
      </div>
    );
  }
}

export default App;
