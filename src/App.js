import React, { Component } from 'react';

import './App.css';
import CarContext from './CarContext';
import Cars from './Cars';

class App extends Component {
  constructor() {
    super();

    this.moveCar = this.moveCar.bind(this);

    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };
  };

  moveCar(car) {
    this.setState({ [car]: !this.state[car] });
  }

  render() {
    const state = {
      values: this.state,
      moveCar: this.moveCar,
    };

    return (
      <CarContext.Provider value={state}>
        <Cars />
      </CarContext.Provider>
    );
  }
}

export default App;
