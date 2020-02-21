import pgtools from "pgtools";
import env from "./env";

const { user, host, password, database, port } = env;

pgtools.createdb(
  {
    user,
    password,
    port,
    host
  },
  database,
  error => {
    if (!error) "Database not found, created a new one!";
  }
);
