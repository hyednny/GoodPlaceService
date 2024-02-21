import { Inject, Service } from "typedi";
import { FindOptions } from "sequelize/types";
import { UserAttributes, UserCreateAttributes } from "../sequelize/models/user";
import UserRepository from "../repository/user";

@Service()
export default class UserService {
  @Inject(() => UserRepository) private repository!: UserRepository;
  getUser = async (userId: string, options?: FindOptions<UserAttributes>) => {
    return await this.repository.findOne(userId, options);
  };

  createUser = async (attributes: UserCreateAttributes) => {
    return await this.repository.create(attributes);
  };
}
