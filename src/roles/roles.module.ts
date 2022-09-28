import { Module } from '@nestjs/common';
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserRoles } from "./user-roles.model";
import { User } from "../users/users.model";
import { Roles } from "./roles.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Roles, User,UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
