"use strict";

const faker = require("faker");
const randomCreatedUpdatedAt = require("../randomCreatedUpdatedAt");
const randomize = pool => pool[Math.floor(Math.random() * pool.length)];

module.exports = {
  up: qi =>
    qi.bulkInsert(
      "accounts",
      new Array(200).fill(null).map(() => ({
        name: faker.company.companyName(),
        dateFormat: randomize([
          null,
          "DD/MM/YYYY",
          "MM-DD-YYYY",
          "YYYY MM DD",
          "MMMM Do YYYY",
          "MMM Do YY"
        ]),
        timeFormat: randomize(["h:mm:ss a", "h:m", "HH:m.sa"]),
        headerBgColor: faker.internet.color(),
        headerFontColour: faker.internet.color(),
        employeeTerm: randomize([null, "Agents", "Crews", "Guards", "Reps"]),
        roleTerm: randomize([null, "Jobs", "Duties", "Positions"]),
        newHireTerm: randomize([
          null,
          "New starters",
          "Pre onboards",
          "Candidates"
        ]),
        locationTerm: randomize([
          null,
          "Areas",
          "Centres",
          "Departments",
          "Projects",
          "Rooms",
          "Sites",
          "Stores"
        ]),
        rosterTerm: randomize([null, "Rotas", "Schedules"]),
        emailFromName: faker.name.findName(),
        emailFromAddress: faker.internet.email(),
        ...randomCreatedUpdatedAt()
      }))
    ),
  down: qi => qi.bulkDelete("accounts")
};
