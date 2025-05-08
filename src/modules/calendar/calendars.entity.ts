import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { UserEntity } from '../users/users.entity';

@Entity({ name: "calendars" })
export class CalendarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb', default: () => "'[]'" })
  holidays: any[];


  @OneToOne(() => UserEntity, user => user.calendar, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
