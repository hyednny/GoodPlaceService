import { Request, Response } from "express";
import { Inject, Service } from "typedi";

@Service()
export default class UserController {
  createUserHandler = async (Request: { body: any }) => {
    console.log(Request.body);
  };
}
