import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('entity')
export class AppEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  channel: string;

  @Column({ type: 'json' })
  data: string;

  @CreateDateColumn()
  createdAt: Date;
}
