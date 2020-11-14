import React, { Component } from 'react';
import CarContext from './Context/CarContext';
import TrafficContext from './Context/TrafficContext'

import './App.css';

import Cars from './Cars';
import TrafficSignal from './TrafficSignal';

class App extends Component {
  constructor() {
    super();

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };
  };

  moveCar(car) {
    this.setState((state) => ({
      cars: { ...state.cars, [car]: !state.cars[car] }
    }));
  }

  changeSignal(signal) {
    this.setState({ signal: { color: signal } });
  }

  render() {
    const carState = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };

    const trafficState = {
      signalColor: this.state.signal,
      changeSignal: this.changeSignal,
    };

    return (
      <div className="container">
        <CarContext.Provider value={carState}>
          < Cars />
        </CarContext.Provider>
        <TrafficContext.Provider value={trafficState}>
          <TrafficSignal />
        </TrafficContext.Provider>
      </div>
    );
  }
}

export default App;
