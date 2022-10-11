import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CasesService } from "./cases.service";

@Controller('cases')
export class CasesController {

  constructor(private casesService: CasesService) {
  }

  @Post()
  create(@Body() data){
    return this.casesService.createCase(data)
  }

  @Post("/product")
  createProduct(@Body() data){
    return this.casesService.createNewProduct(data)
  }

  @Get("/:id")
  getCaseById(@Param() data){
    return this.casesService.getCaseById(data)
  }

  @Get("/products/:id")
  getCaseProducts(@Param() data){
    return this.casesService.getCaseProducts(data)
  }

  @Get("/check/:id")
  getWinner(@Param() data){
    return this.casesService.openCase(data)
  }

  @Get()
  getAll(){
    return this.casesService.getAllCases()
  }
}
