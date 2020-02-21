"use strict";

module.exports = (sequelize, types) =>
  sequelize.define("cars", {
    id: {
      type: types.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    make: types.ENUM("Holden", "Ford"),
    topSpeed: types.FLOAT,
    updatedAt: types.INTEGER,
    createdAt: types.INTEGER
  });
