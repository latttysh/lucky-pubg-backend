import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Inventory } from "./invenory.model";

@Injectable()
export class InventoryService {

  constructor(@InjectModel(Inventory) private inventoryRepository: typeof Inventory) {
  }

  async create(data:any) {
    const product = await this.inventoryRepository.create(data)
    return product
  }

  async getByUserId(data:any){
    const products = await this.inventoryRepository.findAll({where: {userId: data.id}})
    return products
  }
}
