"use strict";
const rootUser = require("../rootUser");
const jwt = require("jsonwebtoken");
const db = require("../db");

module.exports = (request, responder) => {
  if (
    request.body.username === rootUser.username &&
    request.body.password === rootUser.password
  ) {
    responder.send({
      success: true,
      username: rootUser.username,
      token: jwt.sign("ROOT_USER", process.env.JWT_SECRET)
    });
    return;
  }

  db.Users.findAll().then(data => {
    let user = data.find(
      user =>
        user.username === request.body.username &&
        user.password === request.body.password
    );

    if (user) {
      responder.send({
        success: true,
        username: user.username,
        token: jwt.sign(user.id, process.env.JWT_SECRET)
      });
    } else {
      responder.send({ success: false });
    }
  });
};
