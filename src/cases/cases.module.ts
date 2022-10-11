import { Module } from '@nestjs/common';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Cases } from "./cases.model";
import { CasesProducts } from "./cases-products.model";
import { UsersModule } from "../users/users.module";

@Module({
  controllers: [CasesController],
  providers: [CasesService],
  imports: [
    SequelizeModule.forFeature([Cases, CasesProducts]),
    UsersModule
  ], exports: [
    CasesService
  ]
})
export class CasesModule {}
