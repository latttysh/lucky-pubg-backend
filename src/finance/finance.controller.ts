import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { FinanceService } from "./finance.service";

@Controller('finance')
export class FinanceController {

  constructor(private financeService: FinanceService) {
  }

  @Post("/deposit")
  create(@Body() data){
    return this.financeService.createOperation(data)
  }

  @Post("/createForm")
  createPay(@Body() data){
    return this.financeService.createPayForm(data)
  }


  @Get("/:id")
  getUserOperations(@Param() data){
    return this.financeService.getFinanceByUser(data)
  }
}
