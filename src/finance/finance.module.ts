import { Module } from '@nestjs/common';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Finance } from "./finance.model";
import { UsersModule } from "../users/users.module";

@Module({
  controllers: [FinanceController],
  providers: [FinanceService],
  imports: [
    SequelizeModule.forFeature([Finance]),
    UsersModule
  ],
  exports: [
    FinanceService
  ]
})
export class FinanceModule {}
