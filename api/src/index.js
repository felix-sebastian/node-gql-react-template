"use strict";
const env = require("./env");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./db");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const passportStrategy = require("./passportStrategy");
const logInPost = require("./controllers/logIn");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db }
});

const app = express();
app.use(bodyParser());
app.use(cors());
passport.use(passportStrategy);
server.applyMiddleware({ app });
passport.initialize();

// routes
app.post("/log-in", logInPost);

app.use("/graphql", (req, res, next) =>
  passport.authenticate("jwt", { session: false }, user => {
    if (user) req.user = user;
    next();
  })(req, res, next)
);

app.listen({ port: process.env.GRAPGQL_PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
