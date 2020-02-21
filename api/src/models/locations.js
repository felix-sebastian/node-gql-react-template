"use strict";

module.exports = (sequelize, types) =>
  sequelize.define(
    "locations",
    {
      id: {
        type: types.INTEGER
      },
      name: {
        type: types.STRING
      },
      streetAddress: {
        type: types.STRING
      },
      state: {
        type: types.STRING
      },
      timeZone: {
        type: types.STRING
      }
    },
    {
      freezeTableName: true
    }
  );
