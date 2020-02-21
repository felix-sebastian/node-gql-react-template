"use strict";

module.exports = {
  cars: (_, __, { db }) =>
    db.cars
      .findAll()
      .then(result =>
        result.map(car => ({ make: car.make, topSpeed: car.topSpeed }))
      )
};
