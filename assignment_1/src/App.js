import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    info: [
      {name: 'We need your name!'},
      {age: 'We need your age!'}
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      info: [
        {name: event.target.value},
        {age: this.state.info[1].age}
      ]
    })
  }

  changeAgeHandler = (event) => {
    this.setState({
      info: [
        {name: this.state.info[0].name},
        {age: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <h1>Just a little info...</h1>
          <div className="content">
            <div>
              <UserInput changed={this.changeNameHandler}>Name</UserInput>
              <UserInput changed={this.changeAgeHandler}>Age</UserInput>
            </div>
            <UserOutput name={this.state.info[0].name} age={this.state.info[1].age}/>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
