import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post()
  login(@Body() userDto: any) {
    return this.authService.auth(userDto)
  }

  @Get("/authMe")
  authMe(@Req() request){
    return this.authService.authMe(request)
  }

}