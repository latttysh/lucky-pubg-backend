import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { RolesService } from "../roles/roles.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

  async createUser(dto){
    const user = await this.userRepository.create(dto)
    const role = await this.roleService.getRoleByValue(dto.role)
    await user.$set("roles", [role.id])
    user.roles = [role]
    return user
  }

  async getAllUsers(){
    const users = await this.userRepository.findAll({include: {all :true}})
    return users
  }

  async getUserByTelegramId(id: string){
    const user = await this.userRepository.findOne({where: {telegramId: id}, include: {all: true}})
    return user
  }

  async updateBalance(data: any){
    const user = await this.userRepository.findOne({where: {id: data.id}, include: {all: true}})
    await user.update({balance_RUB: user.balance_RUB + data.amount})
    return user
  }

}
