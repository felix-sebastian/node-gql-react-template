"use strict";
const rootUser = require("../rootUser");
const jwt = require("jsonwebtoken");
const db = require("../db");

module.exports = (req, res) => {
  if (
    req.body.username === rootUser.username &&
    req.body.password === rootUser.password
  ) {
    res.send({
      success: true,
      username: rootUser.username,
      token: jwt.sign("ROOT_USER", process.env.JWT_SECRET)
    });
    return;
  }

  db.Users.findAll().then(data => {
    let user = data.find(
      user =>
        user.username === req.body.username &&
        user.password === req.body.password
    );
    if (user) {
      res.send({
        success: true,
        username: user.username,
        token: jwt.sign(user.id, process.env.JWT_SECRET)
      });
    } else {
      res.send({ success: false });
    }
  });
};
