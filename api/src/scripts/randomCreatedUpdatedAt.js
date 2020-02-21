const faker = require("faker");

module.exports = () => {
  let a = faker.date.past();
  let b = faker.date.past();

  if (a > b)
    return {
      createdAt: a,
      updatedAt: b
    };

  return {
    createdAt: b,
    updatedAt: a
  };
};
