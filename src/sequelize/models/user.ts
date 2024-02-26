import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { randomId } from "../../utils/helper";

export interface UserCreateAttributes {
  name: string;
  userId: string;
  password: string;
}

export interface UserAttributes extends UserCreateAttributes {
  invited: string;
  createdAt: Date;
  updatedAt: Date;
}

@Table({ tableName: "user" })
export class User extends Model<UserAttributes, UserCreateAttributes> {
  /* Column */

  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare userId: string;

  @Column({ type: DataType.STRING })
  declare name: string;

  @Column({ type: DataType.STRING })
  declare password: string;

  @Column({
    type: DataType.STRING,
    defaultValue: () => randomId(8),
    unique: true,
  })
  declare inviteId: string;
}
