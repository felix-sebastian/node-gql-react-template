"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("accounts", {
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
      dateFormat: {
        type: types.STRING,
        allowNull: true
      },
      timeFormat: {
        type: types.STRING,
        allowNull: true
      },
      logo: {
        type: types.STRING,
        allowNull: true
      },
      headerBgColor: {
        type: types.STRING,
        allowNull: true
      },
      headerFontColour: {
        type: types.STRING,
        allowNull: true
      },
      employeeTerm: {
        type: types.STRING,
        allowNull: true
      },
      roleTerm: {
        type: types.STRING,
        allowNull: true
      },
      newHireTerm: {
        type: types.STRING,
        allowNull: true
      },
      locationTerm: {
        type: types.STRING,
        allowNull: true
      },
      rosterTerm: {
        type: types.STRING,
        allowNull: true
      },
      emailFromName: {
        type: types.STRING,
        allowNull: true
      },
      emailFromAddress: {
        type: types.STRING,
        allowNull: true
      },
      managerEmailSig: {
        type: types.STRING,
        allowNull: true
      },
      employeeEmailSig: {
        type: types.STRING,
        allowNull: true
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
  down: qi => qi.dropTable("accounts")
};
