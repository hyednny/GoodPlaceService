import { FindOptions, WhereOptions } from "sequelize/types/model";
import {
  PlaceList,
  PlaceListAttributes,
  PlaceListCreateAttributes,
} from "../sequelize/models/place_list";
import { Service } from "typedi";

@Service()
export default class PlaceListRepository {
  findByPk(id: number) {
    return PlaceList.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
  }

  findAll(options: FindOptions<PlaceListAttributes>) {
    return PlaceList.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      ...options,
    });
  }

  create(attributes: PlaceListCreateAttributes) {
    return PlaceList.create(attributes);
  }
}
