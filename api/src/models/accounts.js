"use strict";

module.exports = (sequelize, types) =>
  sequelize.define(
    "accounts",
    {
      id: {
        type: types.INTEGER
      },
      name: {
        type: types.STRING
      },
      dateFormat: {
        type: types.STRING
      },
      timeFormat: {
        type: types.STRING
      },
      logo: {
        type: types.STRING
      },
      headerBgColor: {
        type: types.STRING
      },
      headerFontColour: {
        type: types.STRING
      },
      employeeTerm: {
        type: types.STRING
      },
      roleTerm: {
        type: types.STRING
      },
      newHireTerm: {
        type: types.STRING
      },
      locationTerm: {
        type: types.STRING
      },
      rosterTerm: {
        type: types.STRING
      },
      emailFromName: {
        type: types.STRING
      },
      emailFromAddress: {
        type: types.STRING
      },
      managerEmailSig: {
        type: types.STRING
      },
      employeeEmailSig: {
        type: types.STRING
      }
    },
    {
      freezeTableName: true
    }
  );
