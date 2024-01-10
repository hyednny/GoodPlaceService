import { GeometryDataType } from "sequelize";
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { randomId } from "../../utils/helper";

export interface UserCreateAttributes {
  id: number;
  name: string;
  geo: GeometryDataType;
  address: string;
}

export interface UserAttributes extends UserCreateAttributes {
  invited: string;
  createdAt: Date;
}

@Table({ tableName: "user" })
export class User extends Model<UserAttributes, UserCreateAttributes> {
  /* Column */

  @Column({ type: DataType.INTEGER, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare name: string;

  @Column({
    type: DataType.STRING,
    defaultValue: () => randomId(8),
    unique: true,
  })
  declare inviteId: string;
}
