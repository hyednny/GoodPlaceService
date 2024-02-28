import { FindOptions, WhereOptions } from "sequelize/types/model";
import { PlaceListAttributes } from "../sequelize/models/place_list";
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
}
