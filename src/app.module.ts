import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WsModule } from './ws/ws.module';
import { WsService } from './ws/ws.service';
import { WsEntity } from './ws/entity/ws.entity';
import { WsGateway } from './ws/ws.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([WsEntity]),
    WsModule,
  ],
  controllers: [AppController],
  providers: [AppService, WsService, WsGateway],
})
export class AppModule {}
