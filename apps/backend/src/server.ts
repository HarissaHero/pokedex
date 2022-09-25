import express from "express";

import { default as ensure } from "@utils/env";
import { default as db } from "@utils/database";
import { default as logger } from "./middleware/logger";

const app = express();

app.all("*", logger());
app.get("/health", async (request, response) => {
  const dbState = (await db()).readyState;
  response.send({
    http: "OK",
    database: dbState,
  });
});

app.listen(ensure("PORT"), () => {
  console.log("server running...");
});
