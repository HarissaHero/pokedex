import express from "express";

import { default as ensure } from "@helpers/env";
import { default as db } from "@helpers/database";
import { default as logger } from "@middlewares/logger";
import { PokemonRouter } from "./routes";

const app = express();

app.all("*", logger());
app.get("/api/health", async (request, response) => {
  const dbState = db.readyState;
  response.send({
    http: "OK",
    database: dbState,
  });
});
app.use('/api/pokemon',PokemonRouter())

app.listen(ensure("PORT"), () => {
  console.log("server running...");
});
