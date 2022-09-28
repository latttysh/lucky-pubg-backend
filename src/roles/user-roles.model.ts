import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Roles } from "./roles.model";
import { User } from "../users/users.model";


@Table({tableName:"user_roles", createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @ForeignKey(()=> Roles) // Внешний ключ ссылается на таблицу ролей
  @Column({type: DataType.INTEGER})
  roleId: number;

  @ForeignKey(()=> User) // Внешний ключ ссылается на таблицу пользователей
  @Column({type: DataType.INTEGER})
  userId: number;
}