import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AppEntity } from './app.entity';

interface SubscribeData {
  channel: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppService {
  constructor(
    @InjectRepository(AppEntity)
    private readonly appEntityRepository: Repository<AppEntity>,
  ) {}

  @WebSocketServer()
  server: Server;

  // Subscribe to specific channel
  @SubscribeMessage('SUBSCRIBE')
  onSubscribe(
    @MessageBody() data: SubscribeData,
    @ConnectedSocket() socket: Socket,
  ) {
    const { channel } = data;
    socket.join(channel);
  }

  async publish(data: object) {
    const entity: AppEntity = await this.create(data);
    this.server.sockets.to(entity.channel).emit('RECORD_CREATED', entity);
    return entity;
  }

  create(data: object): Promise<AppEntity> {
    const entity = this.appEntityRepository.create(data);
    return this.appEntityRepository.save(entity);
  }

//   TODO
  findMany(query: object): Promise<AppEntity[]> {
    return this.appEntityRepository.find(query);
  }

// TODO
  findOne(id: number): Promise<AppEntity> {
    return this.appEntityRepository.findOne({
      where: { id },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
