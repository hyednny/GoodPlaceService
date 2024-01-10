import express, { Request, Response } from "express";
import { UserRouter } from "../routes/user";
import path from "path";

export function initializeServer() {
  const app = express();

  app.all("/ping", (_req: Request, res: Response) => res.sendStatus(200));
  app.use("/", (_req: Request, res: Response) =>
    res.sendFile(path.join(__dirname, "../template", "/index.html"))
  );

  app.use("/user", UserRouter);

  return app;
}
