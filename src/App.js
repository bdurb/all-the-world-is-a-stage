import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReviewList from './components/ReviewList';
import Details from './components/Details';

class App extends Component {
  render() {
    return (
      <div>
       <Route exact path ='/' component={ReviewList} />
       <Route path='/details' component={Details} />
      </div>
    );
  }
}

export default App;
