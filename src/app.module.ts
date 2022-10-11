import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from "@nestjs/platform-express";
import { FinanceModule } from './finance/finance.module';
import { CasesModule } from './cases/cases.module';
import { InventoryModule } from './inventory/inventory.module';


@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "lucky-pubg",
      models: [],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    FinanceModule,
    CasesModule,
    InventoryModule,
  ]
})

export class AppModule {}
