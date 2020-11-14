import React from "react";
import CarContext from "./Context/CarContext";

import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";

function Cars() {
  return (
    <CarContext.Consumer>
      {({ cars: { blue, red, yellow }, moveCar }) => (
        <div>
          <div>
            <img
              className={red ? "car-right" : "car-left"}
              src={carRed}
              alt="red car"
            />
            <button onClick={() => moveCar('red')} type="button">
              Move
            </button>
          </div>

          <div>
            <img
              className={blue ? "car-right" : "car-left"}
              src={carBlue}
              alt="blue car"
            />
            <button onClick={() => moveCar('blue')} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? "car-right" : "car-left"}
              src={carYellow}
              alt="yellow car"
            />
            <button onClick={() => moveCar('yellow')} type="button">
              Move
            </button>
          </div>
        </div>
      )}
    </CarContext.Consumer>
  );
}

export default Cars;
