import { GeometryDataType } from "sequelize";
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { randomId } from "../../utils/helper";

export interface PlaceListCreateAttributes {
  userId: string;
  place: string;
  geo: string;
  etc: string;
}

export interface PlaceListAttributes extends PlaceListCreateAttributes {
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
  @Column({ type: DataType.STRING })
  declare userId: string;

  @Column({ type: DataType.STRING })
  declare place: string;

  @Column({ type: DataType.GEOMETRY("POINT") })
  declare geo: string;

  @Column({ type: DataType.STRING })
  declare etc: string;
}
