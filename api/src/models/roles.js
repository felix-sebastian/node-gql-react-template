"use strict";

module.exports = (sequelize, types) => {
  const result = sequelize.define(
    "roles",
    {
      id: {
        type: types.INTEGER
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

  result.associate(role => {
    role.belongsToMany(models.employees, {
      through: "employeeRoles",
      as: "employees",
      foreignKey: "role",
      otherKey: "employee"
    });
  });

  return result;
};
