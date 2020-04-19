import React, { Component } from 'react';
import Letter from './Letter';
import './App.css';

class App extends Component {
  state = {
    word: 'we'
  }
  render() {

    let word = null;

    if(this.state.word) {
      let split_word = this.state.word.split('');
      word = (
        split_word.map((letter, index) => {
          return <Letter />
        })
      )
    }

    return (
      <div className="bg-img">
        <div className="content">
          <h1>Type it up</h1>
            <div className="field">
              <input type="text" placeholder="Any word you wish"/>
            </div>
            <div className="output">
              {word}
            </div>
            <div class="field">
              <button>Reset</button>
            </div>
        </div>
      </div> 
    );
  }
}

export default App;
