import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Cases } from "./cases.model";
import { CasesProducts } from "./cases-products.model";
import { UsersService } from "../users/users.service";

@Injectable()
export class CasesService {

  constructor(@InjectModel(Cases) private casesRepository: typeof Cases, @InjectModel(CasesProducts) private casesProductsRepository: typeof CasesProducts,
              private userService: UsersService) {}

  async createCase(data:any){
    const newCase = await this.casesRepository.create(data)
    return newCase
  }

  async createNewProduct(data){
    const newProduct = await this.casesProductsRepository.create(data)
    return newProduct
  }

  async getCaseById(data){
    const foundCase = await this.casesRepository.findOne({where: {id: data.id}, include:{all: true}})
    return foundCase
  }

  async getCaseProducts(data){
    const products = await this.casesProductsRepository.findAll({where: {caseId: data.id}})
    return products
  }

  async getAllCases(){
    const cases = await this.casesRepository.findAll({include:{all: true}})
    return cases
  }

  async openCase(data){
    console.log(data);
    const products = await this.getCaseProducts(data)
    const winner = await this.getWinner(products)
    return {
      winner: winner
    }
  }

  async getWinner(data){
    let maxDraw = data[data.length-1].percent
    let drawnNumber = Math.floor(Math.random() * (maxDraw))

    console.log("draw number = ", drawnNumber);

    let winner = 0
    data.forEach((e:any,i:number) => {
      if (!winner && drawnNumber<=data[i].percent)
        winner = i+1
    })
    return winner
  }
}
