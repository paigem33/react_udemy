import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <h1>Just a little info...</h1>
          <div className="content">
            <UserInput /> 
            <UserOutput />
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
