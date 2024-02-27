import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreateUserRequestType } from "../schema/user";
import UserService from "../service/user";
import { makeResponse } from "../utils/helper";

@Service()
export default class UserController {
  @Inject(() => UserService) private userService!: UserService;

  createUserHandler = async (
    req: Request<
      Record<string, unknown>,
      unknown,
      CreateUserRequestType["body"]
    >,
    res: Response
  ) => {
    const userCheck = await this.userService.getUser(req.body.userId);

    if (userCheck) return makeResponse(res, false, "아이디가 존재합니다.", 400);

    const user = await this.userService.createUser(req.body);

    return makeResponse(res, true, "회원가입이 되었습니다.", 201, user);
  };
}
