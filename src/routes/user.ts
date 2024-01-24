import config from "config";
import jwt from "jsonwebtoken";
import { Router } from "express";

export const UserRouter = Router();

const privateKey = config.get<string>("PRIVATE_KEY");

UserRouter.get("/");
UserRouter.post("/login", (req, res) => {
  const user = { name: req.body.name, password: req.body.password };

  const accessToken = jwt.sign(user, privateKey);
  return res.status(200).json({
    code: 200,
    message: "Token is created",
    accessToken,
  });
});

UserRouter.post("/register", (req, res) => {});
