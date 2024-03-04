import { FindOptions, WhereOptions } from "sequelize/types/model";
import {
  PlaceListAttributes,
  PlaceListCreateAttributes,
} from "../sequelize/models/place_list";
import { Inject, Service } from "typedi";
import PlaceListRepository from "../repository/place_list";
import { ConflictError } from "../utils/errors";

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

  creatPlaceList = async (attributes: PlaceListCreateAttributes) => {
    const placeList = await this.getPlaceList(attributes.id);

    if (placeList) throw new ConflictError("PlaceList ID가 이미 존재합니다.");

    return await this.placeListRepository.create(attributes);
  };
}
