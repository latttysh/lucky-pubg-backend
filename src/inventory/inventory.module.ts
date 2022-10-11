import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Inventory } from "./invenory.model";

@Module({
  providers: [InventoryService],
  controllers: [InventoryController],
  imports:[
    SequelizeModule.forFeature([Inventory])
  ],
  exports:[
    InventoryService
  ]
})
export class InventoryModule {}
