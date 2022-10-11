import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { InventoryService } from "./inventory.service";

@Controller('inventory')
export class InventoryController {

  constructor(private inventoryService: InventoryService) {
  }

  @Post()
  create(@Body() data){
    return this
  }

  @Get("/:id")
  getByUserId(@Param() data){
    return
  }
}
