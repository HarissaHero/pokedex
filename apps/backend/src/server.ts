import express from "express";

const app = express();

app.get("/health", (_request, response) => {
  response.send("OK");
});

app.listen(5000, () => {
  console.log("server running...");
});
