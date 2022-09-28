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

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  phone_num: string;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  company: string;

  @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
  is_moderated: boolean;

  @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
  is_active: boolean;

  @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
  is_agree: boolean;

  @BelongsToMany(()=> Roles, ()=>UserRoles)
  roles: Roles[]
}