import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { User } from "../sequelize/models/user";
import { CreateUserRequestType } from "../schema/user";
import UserService from "../service/user";

@Service()
export default class UserController {
  @Inject(() => UserService) private userService!: UserService;
  // createUserHandler = async (Request: { body: any }) => {
  //   console.log(Request.body);
  //   const { name, userId, password } = Request.body
  //   await User.create({ name, userId, password })

  // };

  createUserHandler = async (
    req: Request<
      Record<string, unknown>,
      unknown,
      CreateUserRequestType["body"]
    >,
    res: Response
  ) => {
    return await this.userService.createUser(req.body);
  };
}
