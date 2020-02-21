"use strict";
const rootUser = require("./rootUser");
const { Strategy, ExtractJwt } = require("passport-jwt");

module.exports = new Strategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    if (payload === "ROOT_USER") return done(rootUser);

    let user = null;

    if ((user = db.Users.findAll().find(user => user.id === payload)))
      return done(user);
  }
);
