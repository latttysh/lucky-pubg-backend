import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

@Table({tableName: "roles"})
export class Roles extends Model<Roles>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @BelongsToMany(()=> User, ()=>UserRoles)
  users: User[]
}