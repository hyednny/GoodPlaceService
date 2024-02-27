import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { GetAllPlaceListRequstType } from "../schema/place_list";
import PlaceListService from "../service/place_list";

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
    const list = await this.placeListService.findAll({ where: req.query });
  };
}
