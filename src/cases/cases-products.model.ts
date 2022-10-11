import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cases } from "./cases.model";


@Table({tableName: "cases-products"})
export class CasesProducts extends Model<CasesProducts>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  img_url: string;

  @Column({type: DataType.INTEGER})
  price: number;

  @Column({type: DataType.FLOAT})
  percent: number;

  @ForeignKey(()=>Cases)
  @Column({type: DataType.INTEGER, unique: false})
  caseId: number

  // @BelongsTo(()=>Cases)
  // case: Cases

}