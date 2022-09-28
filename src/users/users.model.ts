import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";


@Table({tableName:"users"})
export class User extends Model<User>{

  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  name: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  password: string;

  @BelongsToMany(()=> Roles, ()=>UserRoles)
  roles: Roles[]
}