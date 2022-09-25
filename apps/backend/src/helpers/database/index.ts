import mongoose, { Connection } from "mongoose";

import ensure from "@helpers/env";

const DB_NAME = ensure("DB_NAME");
const DB_USER = ensure("DB_USER");
const DB_PSWD = ensure("DB_PSWD");
const DB_HOST = ensure("DB_HOST");
const DB_PORT = ensure("DB_PORT");

let connection: Connection;

const connect = (): Connection => {
  if (connection === undefined) {
    try {
      connection = mongoose.createConnection(
        `mongodb://${DB_USER}:${DB_PSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return connection;
};

const db = connect()

export default db;
