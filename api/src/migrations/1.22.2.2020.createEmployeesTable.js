"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("employees", {
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
      dob: {
        type: types.DATE,
        allowNull: true
      },
      gender: {
        type: types.ENUM("Male", "Female"),
        allowNull: true
      },
      notifyMobile: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      notifyEmail: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      pendPwRset: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      notes: {
        type: types.STRING,
        allowNull: true
      },
      startDate: {
        type: types.DATE,
        allowNull: true
      },
      newHire: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      baseRate: {
        type: types.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      award: {
        type: types.INTEGER,
        allowNull: true
      },
      paySchedule: {
        type: types.INTEGER,
        allowNull: true
      },
      weeklyHours: {
        type: types.FLOAT,
        allowNull: true
      },
      workSchedule: {
        type: types.INTEGER,
        allowNull: true
      },
      annualLeave: {
        type: types.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      personalLeave: {
        type: types.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      longServiceLeave: {
        type: types.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      role: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
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
  down: qi => qi.dropTable("employees")
};
