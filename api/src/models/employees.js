"use strict";

module.exports = (sequelize, types) => {
  const result = sequelize.define(
    "employees",
    {
      id: {
        type: types.INTEGER
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
      password: {
        type: DataTypes.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
      },
      dob: {
        type: types.DATE
      },
      gender: {
        type: types.ENUM("Male", "Female")
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
        type: types.STRING
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

  result.associate(employee => {
    employee.hasMany(models.roles, {
      through: "employeeRoles",
      as: "roles",
      foreignKey: "employee",
      otherKey: "role"
    });
  });

  result.associate(employee => {
    employee.belongsTo(models.employeePerms, {
      as: "permissions",
      foreignKey: "permission"
    });
  });

  return result;
};
