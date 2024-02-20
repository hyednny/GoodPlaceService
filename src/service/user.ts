import { Inject, Service } from "typedi";
import { FindOptions } from "sequelize/types";
import { UserAttributes, UserCreateAttributes } from "../sequelize/models/user";

@Service()
export default class UserService {
  @Inject(() => UserRepository) private repository!: UserRepository;
  getUser = async (userId: string, options?: FindOptions<UserAttributes>) => {
    await this.repository.findeOne(userId, options);
  };

  createUser = async (attributes: UserCreateAttributes) => {
    const user = await this.getUser(attributes.userId);
  };
}
