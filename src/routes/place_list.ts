import { Router } from "express";
import PlaceListController from "../controller/place_list";
import Container from "typedi";
import requestValidator from "../middleware/requestValidator";
import {
  createPlaceListSchema,
  getAllPlaceListSchema,
  getPlaceListSchema,
} from "../schema/place_list";
import { requestHandler } from "../utils/helper";

export const PlaceListRouter = Router();
const controller = Container.get(PlaceListController);

PlaceListRouter.get(
  "/",
  requestValidator(getAllPlaceListSchema),
  requestHandler(controller.getAllPlaceListHandler)
);

PlaceListRouter.get(
  "/:id",
  requestValidator(getPlaceListSchema),
  requestHandler(controller.getPlaceListHandler)
);

PlaceListRouter.post(
  "/",
  requestValidator(createPlaceListSchema),
  requestHandler(controller.createPlaceListHandler)
);
