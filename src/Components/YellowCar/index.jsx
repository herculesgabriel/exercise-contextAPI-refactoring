import React from 'react';
import CarContext from '../../CarContext';

import carYellowImage from '../../images/carYellow.jpeg';

export default function YellowCar() {
  return (
    <CarContext.Consumer>
      {
        ({ values, moveCar }) => (
          <div>
            <img
              className={values.yellow ? 'car-right' : 'car-left'}
              src={carYellowImage}
              alt="yellow car"
            />

            <button
              onClick={() => moveCar('yellow')}
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
