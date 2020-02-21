"use strict";

module.exports = {
  up: (qi, types) =>
    qi.createTable("employeePerms", {
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
      canDiscuss: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canViewFiles: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canViewRosters: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canViewBreakLengths: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canViewBreakStart: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canShiftAck: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canShiftSwaps: {
        type: types.ENUM("DENY", "ALLOW", "APPROVAL_REQUIRED"),
        allowNull: false,
        defaultValue: "APPROVAL_REQUIRED"
      },
      canShiftCovers: {
        type: types.ENUM("DENY", "ALLOW", "APPROVAL_REQUIRED"),
        allowNull: false,
        defaultValue: "APPROVAL_REQUIRED"
      },
      canShiftDrops: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canShiftPickups: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canUnavailReqs: {
        type: types.ENUM("DENY", "ALLOW", "APPROVAL_REQUIRED"),
        allowNull: false,
        defaultValue: "APPROVAL_REQUIRED"
      },
      unvReqMessage: {
        type: types.STRING,
        allowNull: true
      },
      showRoleName: {
        type: types.ENUM("NEVER", "ALWAYS", "WHEN_NOT_PRIMARY"),
        allowNull: true
      },
      showLocName: {
        type: types.ENUM("NEVER", "ALWAYS", "WHEN_NOT_PRIMARY"),
        allowNull: true
      },
      showLocName: {
        type: types.ENUM("NEVER", "ALWAYS", "WHEN_NOT_PRIMARY"),
        allowNull: true
      },
      showBreakLengths: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      showBreakStart: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      reqNotesOnClockDiffLength: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      reqNotesOnClockDiffTime: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      clockBreaks: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      earlyStartRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN"),
        allowNull: false,
        defaultValue: "UP"
      },
      earlyStartRoundTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 15
      },
      lateStartRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN"),
        allowNull: false,
        defaultValue: "UP"
      },
      lateStartRoundTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 15
      },
      earlyFinishRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN"),
        allowNull: false,
        defaultValue: "UP"
      },
      earlyFinishRoundTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 15
      },
      lateFinishRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN"),
        allowNull: false,
        defaultValue: "UP"
      },
      lateFinishRoundTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 15
      },
      canViewAuthedTimesheets: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      canRequestLeave: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canViewForecast: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canRestrictBalances: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      canDisplayLeaveBalances: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      smartRoleAssnmt: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      viewPayslips: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      minLeaveNotice: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 14
      },
      leaveReqMessage: {
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
  down: qi => qi.dropTable("employeePerms")
};
