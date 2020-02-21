"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = require("./env");

var result = {};
const { username, host, password, database, port } = env;

var sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: "postgres"
});

fs.readdirSync(path.join(__dirname, "/models")).forEach(file => {
  const model = sequelize.import(path.join(__dirname, "/models", file));
  result[model.name] = model;
});

Object.values(result).forEach(
  model => model.associate && model.associate(result)
);

result.sequelize = sequelize;
module.exports = result;
