"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("managers", {
      id: {
        type: types.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      account: {
        type: types.INTEGER,
        allowNull: false
      },
      name: {
        type: types.STRING,
        allowNull: false
      },
      permission: {
        type: types.INTEGER,
        allowNull: true
      },
      picture: {
        type: types.STRING,
        allowNull: true
      },
      mobile: {
        type: types.STRING,
        allowNull: true
      },
      email: {
        type: types.STRING,
        allowNull: true
      },
      password: {
        type: types.STRING,
        allowNull: false
      },
      accessLevel: {
        type: types.ENUM("COMPANY", "STATE", "LOCATION"),
        allowNull: false,
        defaultValue: "COMPANY"
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
  down: qi => qi.dropTable("managers")
};
