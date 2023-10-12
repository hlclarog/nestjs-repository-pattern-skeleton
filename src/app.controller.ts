import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';
import { ConfigType } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {
    Logger.log(dbConfig.host);
    Logger.log(dbConfig.port);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
