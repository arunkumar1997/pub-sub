import { Injectable } from '@nestjs/common';
import { WsService } from './ws/ws.service';
import { WsGateway } from './ws/ws.gateway';

@Injectable()
export class AppService {
  constructor(
    public readonly wsService: WsService,
    public readonly wsGateway: WsGateway,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async publish(data: object) {
    const entity: any = await this.wsService.create(data);
    this.wsGateway.server.sockets
      .to(entity.channel)
      .emit('RECORD_CREATED', entity);
    return entity;
  }
}
