import { Router } from "express";
import { Container } from "typedi";
import config from "config";
import jwt from "jsonwebtoken";
import UserController from "../controller/user";
import requestValidator from "../middleware/requestValidator";
import { createUserSchema } from "../schema/user";
import { requestHandler } from "../utils/helper";

export const UserRouter = Router();
const controller = Container.get(UserController);

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

UserRouter.post(
  "/register",
  requestValidator(createUserSchema),
  requestHandler(controller.createUserHandler)
);
