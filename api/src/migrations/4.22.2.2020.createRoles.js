"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("roles", {
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
      location: {
        type: types.INTEGER,
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
  down: qi => qi.dropTable("roles")
};
