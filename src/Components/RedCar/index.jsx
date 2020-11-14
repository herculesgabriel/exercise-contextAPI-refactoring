import React from 'react';
import CarContext from '../../CarContext';

import carRedImage from '../../images/carRed.jpeg';

export default function RedCar() {
  return (
    <CarContext.Consumer>
      {
        ({ values, moveCar }) => (
          <div>
            <img
              className={values.red ? 'car-right' : 'car-left'}
              src={carRedImage}
              alt="red car"
            />

            <button
              onClick={() => moveCar('red')}
              type="button"
            >
              Move
            </button>
          </div>
        )
      }
    </CarContext.Consumer>
  );
}
