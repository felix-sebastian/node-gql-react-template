"use strict";

module.exports = {
  updateEmployee: (_, { id, employee }, { db }) =>
    db.employees.find(id).update({
      ...employee
    })
};
