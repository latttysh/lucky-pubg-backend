import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";


@Table({tableName:"users"})
export class User extends Model<User>{

  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  nickname: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  telegramId: string;

  @Column({type: DataType.INTEGER, allowNull: false, defaultValue:0})
  balance_RUB: number;

  @Column({type: DataType.INTEGER, allowNull: false, defaultValue:0})
  balance_UC: number;

  @Column({type: DataType.STRING, allowNull: false})
  referral_code: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  is_referral: boolean

  @BelongsToMany(()=> Roles, ()=>UserRoles)
  roles: Roles[]
}