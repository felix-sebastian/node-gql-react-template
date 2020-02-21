"use strict";

const faker = require("faker");
const randomCreatedUpdatedAt = require("../randomCreatedUpdatedAt");

const randomize = pool => {
  let chosen = pool[Math.floor(Math.random() * pool.length)];
  if (typeof chosen === "function") return chosen();
  return chosen;
};

const db = require("../../db");

module.exports = {
  up: qi =>
    db.accounts.findAll().then(accounts =>
      qi.bulkInsert(
        "employees",
        new Array(300).fill(null).map(() => ({
          name: faker.name.findName(),
          account: randomize(accounts.map(account => account.id)),
          mobile: randomize([null, () => faker.phone.phoneNumber()]),
          email: randomize([null, () => faker.internet.email()]),
          password:
            "FUNjJ1yVaKDHrfK9QAYbIlqjjR2Hh5ozmVLfQvCOpDztarVHiW0quiM2Sbdld6si",
          dob: randomize([null, () => faker.date.past()]),
          gender: randomize(["MALE", "FEMALE", "UNDISCLOSED"]),
          notifyMobile: randomize([true, false]),
          notifyEmail: randomize([true, false]),
          pendPwRset: randomize([true, false]),
          notes: randomize([null, () => faker.lorem.sentence()]),
          startDate: randomize([null, faker.date.past()]),
          newHire: randomize([false, false, false, true]),
          baseRate: Math.round(Math.random() * 20),
          weeklyHours: Math.round(Math.random() * 100),
          annualLeave: Math.round(Math.random() * 100),
          personalLeave: Math.round(Math.random() * 100),
          longServiceLeave: Math.round(Math.random() * 100),
          ...randomCreatedUpdatedAt()
        }))
      )
    ),
  down: qi => qi.bulkDelete("employees")
};
