import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import {
  CreatePlaceListRequestType,
  GetAllPlaceListRequstType,
  GetPlaceListRequestType,
} from "../schema/place_list";
import PlaceListService from "../service/place_list";
import { makeResponse } from "../utils/helper";

@Service()
export default class PlaceListController {
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
      CreatePlaceListRequestType["param"],
      unknown,
      CreatePlaceListRequestType["body"]
    >,
    res: Response
  ) => {
    const checkPlaceList = await this.placeListService.getPlaceList(
      req.params.id
    );

    if (checkPlaceList)
      return makeResponse(
        res,
        false,
        "해당 ID에 대한 리스트가 존재합니다.",
        400
      );

    const addPlaceList = await this.placeListService.creatPlaceList(req.body);
  };
}
