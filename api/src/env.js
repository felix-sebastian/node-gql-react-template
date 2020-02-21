"use strict";

module.exports = {
  context: process.env.CONTEXT || "development",
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsAccessKeySecret: process.env.AWS_ACCESS_KEY_SECRET
};
