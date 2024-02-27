import { FindOptions, WhereOptions } from "sequelize/types/model";
import { PlaceListAttributes } from "../sequelize/models/place_list";
import { Inject, Service } from "typedi";
import PlaceListRepository from "../repository/place_list";

@Service()
export default class PlaceListService {
  @Inject(() => PlaceListRepository)
  private placeListRepository!: PlaceListRepository;
  findAll = async (where?: WhereOptions<PlaceListAttributes>) => {
    await this.placeListRepository.findAll(where);
  };
}
