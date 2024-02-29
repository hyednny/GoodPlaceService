import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./user";

export interface PlaceListCreateAttributes {
  place: string;
  geo: string;
  etc?: string;
}

export interface PlaceListAttributes extends PlaceListCreateAttributes {
  id: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

@Table({
  tableName: "placeList",
})
export class PlaceList extends Model<
  PlaceListAttributes,
  PlaceListCreateAttributes
> {
  /* Column */

  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  declare userId: string;

  @Column({ type: DataType.STRING })
  declare place: string;

  @Column({ type: DataType.GEOMETRY("POINT") })
  declare geo: string;

  @Column({ type: DataType.STRING })
  declare etc: string;
}
