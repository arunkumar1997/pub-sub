import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('ws_entity')
export class WsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  channel: string;

  @Column({ type: 'json' })
  data: string;

  @CreateDateColumn()
  createdAt: Date;
}
