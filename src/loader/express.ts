import express, { Request, Response } from "express";
import Helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import Cors from "cors";
import { UserRouter } from "../routes/user";
import path from "path";
import { PlaceListRouter } from "../routes/place_list";

export function initializeServer() {
  const app = express();

  app.use([
    Cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    }),
    Helmet(),
    express.json(),
    morgan("common"),
    cookieParser(),
  ]);

  app.all("/ping", (_req: Request, res: Response) => res.sendStatus(200));
  app.get("/signup", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../template", "/signup.html"));
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net"
    );
  });
  app.post("/signup", (req: Request, res: Response) => {
    console.log(req.body);
  });

  app.use("/user", UserRouter);
  app.use("/placeList", PlaceListRouter);

  return app;
}
