import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.usersService.createUser(userDto)
  }

  @Roles("seller")
  @UseGuards(RolesGuard)
  @Get()
  getAll(){
    return this.usersService.getAllUsers()
  }

}