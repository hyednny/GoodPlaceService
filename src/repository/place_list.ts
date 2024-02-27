import { FindOptions, WhereOptions } from "sequelize/types/model";
import { PlaceList, PlaceListAttributes } from "../sequelize/models/place_list";
import { Service } from "typedi";

@Service()
export default class PlaceListRepository {
  findOne(id: number, options?: FindOptions<PlaceListAttributes>) {
    return PlaceList.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      ...options,
    });
  }

  findAll(where?: WhereOptions<PlaceListAttributes>) {
    return PlaceList.findAll({
      where,
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["place", "DESC"]],
    });
  }
}
