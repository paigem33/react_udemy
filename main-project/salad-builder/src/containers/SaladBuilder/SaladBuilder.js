import React, { Component } from 'react';

import Salad from '../../components/Salad/Salad';

class SaladBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      peppers: 0,
      cucumbers: 0,
      spinach: 0
    }
  }
  render() {
      return (
        <>
            <Salad ingredients={this.state.ingredients}/>
            <div>Controls</div>
        </>
      )
  };
}

export default SaladBuilder;
