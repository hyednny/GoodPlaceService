import { Express } from "express";

function routes(app: Express) {
  app.use("/ping", (_req, res) => res.sendStatus(200));
}

export default routes;
