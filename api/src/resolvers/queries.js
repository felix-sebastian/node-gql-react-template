"use strict";

const _ = require("lodash");

module.exports = {
  employees: (_, __, { db }) =>
    db.employees
      .findAll()
      .then(result =>
        result.map(employee =>
          _.pick(employee, [
            "id",
            "name",
            "picture",
            "mobile",
            "email",
            "dob",
            "gender",
            "notifyMobile",
            "notifyEmail",
            "pendPwRset",
            "notes",
            "startDate",
            "newHire",
            "baseRate",
            "weeklyHours",
            "annualLeave",
            "personalLeave",
            "longServiceLeave"
          ])
        )
      )
};
