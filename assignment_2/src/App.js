import React, { Component } from 'react';
import Letter from './Letter';
import Validation from './Validation'
import './App.css';

class App extends Component {
  state = {
    word: ''
  }

  typeHandler = (event) => {
    this.setState({word: event.target.value});
  }

  deleteHandler = (index) => {
    let word = this.state.word.split('');
    word.splice(index,1);
    let new_word = word.join('');
    this.setState({word: new_word})
  }

  render() {

    let letters = null;

     if(this.state.word.length >= 3){
        letters = this.state.word.split('').map((letter, index) => {
          return <Letter letter={letter} key={index} delete={() => this.deleteHandler(index)}/>
        })
     }

    return (
      <div className="bg-img">
        <div className="content">
          <h1>Type it up</h1>
            <div className="field">
              <input id="word-input" type="text" placeholder="Any word you wish" onChange={this.typeHandler} value={this.state.word}/>
            </div>
            <div className="output">
              {letters}
            </div>
            <Validation word={this.state.word.length}/>
        </div>
      </div> 
    );
  }
}

export default App;
