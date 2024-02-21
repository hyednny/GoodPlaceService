import { FindOptions, CreateOptions } from "sequelize/types";
import { Service } from "typedi";
import {
  User,
  UserAttributes,
  UserCreateAttributes,
} from "../sequelize/models/user";

@Service()
export default class UserRepository {
  findOne(userId: string, options?: FindOptions<UserRepository>) {
    return User.findByPk(userId, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      ...options,
    });
  }

  create(
    attributes: UserCreateAttributes,
    options?: CreateOptions<UserAttributes>
  ) {
    return User.create(attributes, options);
  }
}
