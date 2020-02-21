"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("cars", {
      id: {
        type: types.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      make: {
        type: types.ENUM("Holden", "Ford"),
        allowNull: false
      },
      topSpeed: {
        type: types.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: types.DATE,
        allowNull: false
      },
      updatedAt: {
        type: types.DATE,
        allowNull: false
      }
    }),
  down: qi => qi.dropTable("cars")
};
