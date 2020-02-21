"use strict";

module.exports = (sequelize, types) => {
  const result = sequelize.define(
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
        type: types.STRING,
        validate: {
          is: /^\[1-9]{1}[0-9]{3,14}$/i
        }
      },
      email: {
        type: types.STRING,
        valudate: {
          isEmail: true
        }
      },
      password: {
        type: types.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
      },
      dob: {
        type: types.DATE
      },
      gender: {
        type: types.ENUM("MALE", "FEMALE", "UNDISCLOSED")
      },
      notifyMobile: {
        type: types.BOOLEAN
      },
      notifyEmail: {
        type: types.BOOLEAN
      },
      pendPwRset: {
        type: types.BOOLEAN
      },
      notes: {
        type: types.STRING,
        validate: {
          len: [0, 150]
        }
      },
      startDate: {
        type: types.DATE
      },
      newHire: {
        type: types.BOOLEAN
      },
      baseRate: {
        type: types.FLOAT
      },
      award: {
        type: types.INTEGER
      },
      paySchedule: {
        type: types.INTEGER
      },
      weeklyHours: {
        type: types.FLOAT
      },
      workSchedule: {
        type: types.INTEGER
      },
      annualLeave: {
        type: types.FLOAT
      },
      personalLeave: {
        type: types.FLOAT
      },
      longServiceLeave: {
        type: types.FLOAT
      },
      role: {
        type: types.INTEGER
      }
    },
    {
      freezeTableName: true
    }
  );

  sequelize.associate = models => {
    result.hasMany(models.roles, {
      through: "employeeRoles",
      as: "roles",
      foreignKey: "employee",
      otherKey: "role"
    });

    result.belongsTo(models.employeePerms, {
      as: "permissions",
      foreignKey: "permission"
    });
  };

  return result;
};
