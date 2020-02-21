"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("employeeRole", {
      id: {
        type: types.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      employee: {
        type: types.INTEGER,
        allowNull: false
      },
      role: {
        type: types.INTEGER,
        allowNull: false
      },
      skillLevel: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 3
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
  down: qi => qi.dropTable("employeeRole")
};
