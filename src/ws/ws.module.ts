import { Module } from '@nestjs/common';
import { WsService } from './ws.service';
import { WsGateway } from './ws.gateway';
import { WsEntity } from './entity/ws.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WsEntity])],
  providers: [WsGateway, WsService],
})
export class WsModule {}
