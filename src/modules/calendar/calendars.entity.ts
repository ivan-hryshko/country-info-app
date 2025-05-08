import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { UserEntity } from '../users/users.entity';

@Entity({ name: "calendars" })
export class CalendarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { array: true })
  holidays: string[];

  @OneToOne(() => UserEntity, user => user.calendar, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
