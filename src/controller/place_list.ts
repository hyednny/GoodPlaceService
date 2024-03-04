import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import {
  CreatePlaceListRequestType,
  GetAllPlaceListRequstType,
  GetPlaceListRequestType,
} from "../schema/place_list";
import PlaceListService from "../service/place_list";
import { makeResponse } from "../utils/helper";
import UserService from "../service/user";

@Service()
export default class PlaceListController {
  @Inject(() => UserService) private userService!: UserService;
  @Inject(() => PlaceListService) private placeListService!: PlaceListService;

  getAllPlaceListHandler = async (
    req: Request<
      Record<string, string>,
      unknown,
      unknown,
      GetAllPlaceListRequstType["query"]
    >,
    res: Response
  ) => {
    const placeList =
      req.query.userId !== undefined
        ? await this.placeListService.getAllPlaceList({ where: req.query })
        : undefined;

    return makeResponse(
      res,
      true,
      "해당 유저가 등록한 리스트가 출력되었습니다.",
      201,
      placeList
    );
  };

  getPlaceListHandler = async (
    req: Request<GetPlaceListRequestType["params"]>,
    res: Response
  ) => {
    const placeList = await this.placeListService.getPlaceList(req.params.id);

    return makeResponse(
      res,
      true,
      "해당 ID에 대한 리스트가 출력되었습니다.",
      201,
      placeList
    );
  };

  createPlaceListHandler = async (
    req: Request<
      Record<string, unknown>,
      unknown,
      CreatePlaceListRequestType["body"]
    >,
    res: Response
  ) => {
    const placeList = await this.placeListService.creatPlaceList(req.body);

    return makeResponse(res, true, "리스트가 생성되었습니다.", 201, placeList);
  };
}
