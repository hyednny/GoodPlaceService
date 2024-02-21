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
  name: string;
  userId: string;
  password: string;
}

export interface UserAttributes extends UserCreateAttributes {
  invited: string;
  createdAt: Date;
}

@Table({ tableName: "user" })
export class User extends Model<UserAttributes, UserCreateAttributes> {
  /* Column */

  @Column({ type: DataType.STRING })
  declare name: string;

  @PrimaryKey
  @Column({ type: DataType.STRING })
  declare userId: string;

  @Column({ type: DataType.STRING })
  declare password: string;

  @Column({ type: DataType.GEOMETRY("POINT") })
  declare geo: string;

  @Column({
    type: DataType.STRING,
    defaultValue: () => randomId(8),
    unique: true,
  })
  declare inviteId: string;
}
