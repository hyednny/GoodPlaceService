import express from "express";
import routes from "./routes";

export function initializeSever() {
  const app = express();

  routes(app);

  return app;
}
