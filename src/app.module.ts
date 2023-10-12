import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './api/user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import config from './config/configuration';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config, databaseConfig],
      envFilePath: ['.env.development'],
    }),
    User,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
