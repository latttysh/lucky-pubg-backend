import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cases } from "../cases/cases.model";
import { CasesProducts } from "../cases/cases-products.model";
import { User } from "../users/users.model";

@Table({tableName:"inventory"})
export class Inventory extends Model<Inventory>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @ForeignKey(()=>CasesProducts)
  @Column({type: DataType.INTEGER, unique: false})
  productId: number

  @ForeignKey(()=>User)
  @Column({type: DataType.INTEGER, unique: false})
  userId: number
}