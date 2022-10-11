import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CasesProducts } from "./cases-products.model";


@Table({tableName: "cases"})
export class Cases extends Model<Cases>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  img_url: string;

  @Column({type: DataType.INTEGER, unique: false, allowNull: false})
  price: number;

  @HasMany(()=>CasesProducts)
  products: CasesProducts
}