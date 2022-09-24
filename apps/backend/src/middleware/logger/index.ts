import { Handler } from "express";

const handler: Handler = async (req, resp, next) => {
  const initialDate = new Date();
  console.info(`${initialDate.toISOString()}: ${req.method} ${req.path}`);

  resp.on("finish", () => {
    const date = new Date();
    console.info(
      `${date.toISOString()}: ${resp.statusCode} (duration: ${
        date.getTime() - initialDate.getTime()
      } ms)[FINISHED]`
    );
  });

  resp.on("close", () => {
    const date = new Date();
    console.info(
      `${date.toISOString()}: ${resp.statusCode} (duration: ${
        date.getTime() - initialDate.getTime()
      } ms)[CLOSED]`
    );
  });

  return next();
};

const withLogger = (): Handler => handler;

export default withLogger;
