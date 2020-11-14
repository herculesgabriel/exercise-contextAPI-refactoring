import React from 'react';
import CarContext from '../../CarContext';

import carBlueImage from '../../images/carBlue.jpeg';

export default function BlueCar() {
  return (
    <CarContext.Consumer>
      {
        ({ values, moveCar }) => (
          <div>
            <img
              className={values.blue ? 'car-right' : 'car-left'}
              src={carBlueImage}
              alt="blue car"
            />

            <button
              onClick={() => moveCar('blue')}
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
