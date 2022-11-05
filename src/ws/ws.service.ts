import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WsEntity } from './entity/ws.entity';

@Injectable()
export class WsService {
  constructor(
    @InjectRepository(WsEntity)
    private readonly wsEntityRepository: Repository<WsEntity>,
  ) {}

  create(data: object): Promise<WsEntity> {
    const entity = this.wsEntityRepository.create(data);
    return this.wsEntityRepository.save(entity);
  }

  findMany(query: object): Promise<WsEntity[]> {
    return this.wsEntityRepository.find(query);
  }

  findOne(id: number): Promise<WsEntity> {
    return this.wsEntityRepository.findOne({
      where: { id },
    });
  }
}
