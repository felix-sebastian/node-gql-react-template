"use strict";

module.exports = (sequelize, types) =>
  sequelize.define(
    "employeePerms",
    {
      id: {
        type: types.INTEGER
      },
      name: {
        type: types.STRING
      },
      canDiscuss: {
        type: types.BOOLEAN
      },
      canViewFiles: {
        type: types.BOOLEAN
      },
      canViewRosters: {
        type: types.BOOLEAN
      },
      canViewBreakLengths: {
        type: types.BOOLEAN
      },
      canViewBreakStart: {
        type: types.BOOLEAN
      },
      canShiftAck: {
        type: types.BOOLEAN
      },
      canShiftSwaps: {
        type: types.ENUM("DENY", "ALLOW", "APPROVAL_REQUIRED")
      },
      canShiftCovers: {
        type: types.ENUM("DENY", "ALLOW", "APPROVAL_REQUIRED")
      },
      canShiftDrops: {
        type: types.BOOLEAN
      },
      canShiftPickups: {
        type: types.BOOLEAN
      },
      canUnavailReqs: {
        type: types.ENUM("DENY", "ALLOW", "APPROVAL_REQUIRED")
      },
      unvReqMessage: {
        type: types.STRING,
        validate: {
          len: [0, 150]
        }
      },
      showRoleName: {
        type: types.ENUM("NEVER", "ALWAYS", "WHEN_NOT_PRIMARY")
      },
      showLocName: {
        type: types.ENUM("NEVER", "ALWAYS", "WHEN_NOT_PRIMARY")
      },
      showLocName: {
        type: types.ENUM("NEVER", "ALWAYS", "WHEN_NOT_PRIMARY")
      },
      showBreakLengths: {
        type: types.BOOLEAN
      },
      showBreakStart: {
        type: types.BOOLEAN
      },
      reqNotesOnClockDiffLength: {
        type: types.BOOLEAN
      },
      reqNotesOnClockDiffTime: {
        type: types.BOOLEAN
      },
      clockBreaks: {
        type: types.BOOLEAN
      },
      earlyStartRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN")
      },
      earlyStartRoundTime: {
        type: types.INTEGER
      },
      lateStartRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN")
      },
      lateStartRoundTime: {
        type: types.INTEGER
      },
      earlyFinishRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN")
      },
      earlyFinishRoundTime: {
        type: types.INTEGER
      },
      lateFinishRoundRule: {
        type: types.ENUM("NONE", "UP", "DOWN")
      },
      lateFinishRoundTime: {
        type: types.INTEGER,
        validate: {
          isIn: [[5, 10, 15, 30]]
        }
      },
      canViewAuthedTimesheets: {
        type: types.BOOLEAN
      },
      canRequestLeave: {
        type: types.BOOLEAN
      },
      canViewForecast: {
        type: types.BOOLEAN
      },
      canRestrictBalances: {
        type: types.BOOLEAN
      },
      canDisplayLeaveBalances: {
        type: types.BOOLEAN
      },
      smartRoleAssnmt: {
        type: types.BOOLEAN
      },
      viewPayslips: {
        type: types.BOOLEAN
      },
      minLeaveNotice: {
        type: types.INTEGER,
        validate: {
          min: 1,
          max: 30
        }
      },
      leaveReqMessage: {
        type: types.STRING,
        validate: {
          len: [0, 150]
        }
      }
    },
    {
      freezeTableName: true
    }
  );
