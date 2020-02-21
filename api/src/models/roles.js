"use strict";

module.exports = (sequelize, types) => {
  const result = sequelize.define(
    "roles",
    {
      id: {
        type: types.INTEGER,
        primaryKey: true
      },
      name: {
        type: types.STRING
      },
      location: {
        type: types.INTEGER
      }
    },
    {
      freezeTableName: true
    }
  );

  result.associate = models => {
    result.belongsToMany(models.employees, {
      through: "employeeRoles",
      as: "employees",
      foreignKey: "role",
      otherKey: "employee"
    });
  };

  return result;
};
