import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Finance } from "./finance.model";
import { UsersService } from "../users/users.service";
import axios from "axios";
import { createHash } from "crypto";

@Injectable()
export class FinanceService {

  constructor(@InjectModel(Finance) private financeRepository: typeof Finance, private usersService: UsersService) {
  }

  async createOperation(data){
    let message = `❤️‍🔥 Пользователь пополнил баланс!
    
            Id пользователя: ${data.us_id}
            Денег: ${data.us_price}`;
    console.log(message);
    axios.post(`https://api.telegram.org/bot2061278459:AAHUbcu_npM2WdlcJcUFtMM6FDa69o1T65g/sendMessage`, {
      chat_id: "-521043965",
      text: message
    }).then(res => console.log(res.data.ok)).catch(err => console.log(err));

    await this.financeRepository.create({amount: data.us_price, userId: data.us_id})
    const update = await this.usersService.updateBalance({id: data.us_id })
    //добавить реферальную систему
    return update
  }

  async createPayForm (data) {
    let signature = createHash("MD5").update(`20586:${data.price}:D34QLz}pnz9=mR3:RUB:deposit`).digest("hex");
    return {
      formpay: `https://pay.freekassa.ru/?m=${20586}&oa=${data.price}&currency=${"RUB"}&o=deposit&s=${signature}&us_price=${data.price}&us_id=${data.userId}`
    };
  }

  async getFinanceByUser(data){

  }
}
