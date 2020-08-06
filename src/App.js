import React, { Component } from 'react';
import './App.css';
import Solution from './Components/Solution';
import Score from './Components/Score';
import Letters from './Components/Letters'

class App extends Component {
  state = {
    letterStatus: {
      A: false,
      B: false,
      C: false,
      D: false,
      E: true,
      F: false,
      G: false,
      H: false,
      I: false,
      J: false,
      K: false,
      L: false,
      M: false,
      N: false,
      O: false,
      P: false,
      Q: false,
      R: false,
      S: true,
      T: false,
      U: false,
      V: false,
      W: false,
      X: false,
      Y: true,
      Z: false
    },
    solution: {
      word: "BYTES",
      hint: "testing."
    },
    score: 100
  }

  generateLetterStatuses() {
    const letters = {};
    for(let i = 65; i <= 90; i++) {
      letters[String.fromCharCode(i)] = false;
    }
    return letters
  }

  render() {
    return (
      <React.Fragment>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letters letterStatus={this.state.letterStatus}/>
      </React.Fragment>
    );
  }
}

export default App;
