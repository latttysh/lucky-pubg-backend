import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";


@Table({tableName: "finance"})
export class Finance extends Model<Finance>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.INTEGER, unique: false})
  amount: number;

  @ForeignKey(()=>User)
  @Column({type: DataType.INTEGER, allowNull: false})
  userId: number;

  @BelongsTo(()=>User)
  user: User
}