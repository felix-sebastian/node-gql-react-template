"use strict";

module.exports = `
  type Employee {
    id: ID!
    name: String!
    picture: String
    mobile: String!
    email: String!
    dob: String
    gender: Gender!
    notifyMobile: Boolean!
    notifyEmail: Boolean!
    pendPwRset: Boolean!
    notes: String
    startDate: String
    newHire: Boolean!
    baseRate: Float!
    weeklyHours: Float!
    annualLeave: Float!
    personalLeave: Float!
    longServiceLeave: Float! 
  }
`;
