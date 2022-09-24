import express from "express";

import { default as ensure } from "@utils/env";
import { default as logger } from "./middleware/logger";

const app = express();

app.all("*", logger());
app.get("/health", (request, response) => {
  response.send("OK");
});

app.listen(ensure("PORT"), () => {
  console.log("server running...");
});
