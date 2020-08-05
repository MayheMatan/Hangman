import React, { Component } from 'react';
import './App.css';
import Solution from './Components/Solution';
import Score from './Components/Score';
import Letters from './Components/Letters'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Score />
        <Solution />
        <Letters />
      </React.Fragment>
    );
  }
}

export default App;
