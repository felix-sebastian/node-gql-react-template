"use strict";

module.exports = {
  createCar: (_, { car }, { db }) =>
    db.cars.create({
      make: car.make,
      topSpeed: car.topSpeed,
      createdAt: new Date(),
      updatedAt: new Date()
    })
};
