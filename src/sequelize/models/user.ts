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
  userId: string;
  password: string;
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

  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare name: string;

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
