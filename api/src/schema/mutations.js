"use strict";
module.exports = `
  type Mutation {
    createCar(car: CarInput!): [Car]
  }
`;
