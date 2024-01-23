import config from "config";
import jwt from "jsonwebtoken";
import { Router } from "express";

export const UserRouter = Router();

const privateKey = config.get<string>("PRIVATE_KEY");

UserRouter.get("/");
UserRouter.post("/login", (req, res) => {
  const user = { name: req.body.name };

  const accessToken = jwt.sign(user, privateKey);
  res.json({ accessToken });
});
