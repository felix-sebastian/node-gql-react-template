"use strict";

module.exports = (sequelize, types) =>
  sequelize.define(
    "employees",
    {
      id: {
        type: types.INTEGER,
        primaryKey: true
      },
      account: {
        type: types.INTEGER
      },
      name: {
        type: types.STRING
      },
      permission: {
        type: types.INTEGER
      },
      picture: {
        type: types.STRING
      },
      mobile: {
        type: types.STRING
      },
      email: {
        type: types.STRING,
        valudate: {
          isEmail: true
        }
      },
      accessLevel: {
        type: types.ENUM("COMPANY", "STATE", "LOCATION")
      },
      password: {
        type: types.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
      }
    },
    {
      freezeTableName: true
    }
  );
