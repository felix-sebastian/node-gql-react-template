"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("locations", {
      id: {
        type: types.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: types.STRING,
        allowNull: false
      },
      streetAddress: {
        type: types.STRING,
        allowNull: true
      },
      state: {
        type: types.STRING,
        allowNull: true
      },
      timeZone: {
        type: types.STRING,
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
  down: qi => qi.dropTable("locations")
};
