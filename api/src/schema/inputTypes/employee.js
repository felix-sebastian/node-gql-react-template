"use strict";

module.exports = `
  input EmployeeInput {
    name: String
    mobile: String
    email: String
    dob: String
    gender: Gender
    notifyMobile: Boolean
    notifyEmail: Boolean
    notes: String
    startDate: String
    newHire: Boolean
    baseRate: Float
    weeklyHours: Float
    annualLeave: Float
    personalLeave: Float
    longServiceLeave: Float
  }
`;
