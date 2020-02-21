module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "cars",
      new Array(80).fill(null).map(() => ({
        make: Math.random() > 0.5 ? "Holden" : "Ford",
        topSpeed: Math.round(Math.random() * 1000) / 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    ),
  down: queryInterface => queryInterface.bulkDelete("cars")
};
