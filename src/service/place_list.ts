import { FindOptions, WhereOptions } from "sequelize/types/model";
import {
  PlaceListAttributes,
  PlaceListCreateAttributes,
} from "../sequelize/models/place_list";
import { Inject, Service } from "typedi";
import PlaceListRepository from "../repository/place_list";

@Service()
export default class PlaceListService {
  @Inject(() => PlaceListRepository)
  private placeListRepository!: PlaceListRepository;

  getAllPlaceList = async (options: FindOptions<PlaceListAttributes>) => {
    return await this.placeListRepository.findAll(options);
  };

  getPlaceList = async (id: number) => {
    return await this.placeListRepository.findByPk(id);
  };

  creatPlaceList = async (
    attributes: PlaceListCreateAttributes
    // attributes: Partial<Exclude<PlaceListCreateAttributes, "id">>
  ) => {
    return await this.placeListRepository.create(attributes);
  };
}
