import { initializeServer } from "./loader/express";

export function initializeSever() {
  const app = initializeServer();

  return app;
}
