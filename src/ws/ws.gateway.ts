import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsService } from './ws.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WsGateway {
  constructor(private readonly wsService: WsService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('SUBSCRIBE')
  onSubscribe(
    @MessageBody() channel: string,
    @ConnectedSocket() socket: Socket,
  ) {
    socket.join(channel);
  }
}
