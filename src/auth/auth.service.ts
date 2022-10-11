import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "../users/dto/create-user.dto";
import * as bcrypt from "bcryptjs"
import { User } from "../users/users.model";
import sha256 from "crypto-js/sha256";
import hmacSha256 from "crypto-js/hmac-sha256";


@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private  jwtService: JwtService) {
  }

  async auth(user: any) {
    const candidate = await this.userService.getUserByTelegramId(user.id)
    if (candidate) {
      console.log("Пользователь существует");
      return this.generateToken(candidate)
    }

    console.log("Пользователя не существует, сощдаём");
    return this.register(user)
  }

  async authMe(req){
    console.log(req);
    const token = (req.headers.authorization || '')
      .replace(/Bearer\s?/, '')
      .replace('"', '')
      .replace('"', '');
    try {
      const decoded = this.jwtService.verify(token)
      return decoded
    } catch (error) {
      throw new UnauthorizedException({message: "Пользователь не авторизован"})
    }
  }

  async register(user:any) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str = '';
    for (let i = 0; i < 3; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    user["referral_code"] = user.username.slice(0,2) + str
    //Вставить проверку авторизации
    const newUser = await this.userService.createUser({
      role: "user",
      nickname: user.username,
      telegramId: user.id,
      referral_code: user.referral_code
    })
    return this.generateToken(newUser)
  }

  async checkAuth(user){
    const authData = { ...user };
    const { hash: checkHash } = authData;

    delete authData.hash;

    const dataCheckArr = Object.keys(authData)
      .map((key) => `${key}=${authData[key]}`)
      .sort()
      .join("\n");

    const secretKey = sha256("123");
    const hash = String(hmacSha256(dataCheckArr, secretKey));

    return hash === checkHash; // returns true if hash is valid
  }



  private async generateToken(user: User){
    console.log(user);
    const payload = {id: user.id, nickname: user.nickname, balanceRUB: user.balance_RUB, balanceUC: user.balance_UC, ref_code: user.referral_code}
    return {
      token: this.jwtService.sign(payload)
    }
  }

}