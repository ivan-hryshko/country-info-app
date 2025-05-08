import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../users/users.entity';

@Entity({ name: "calendars" })
export class CalendarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { array: true })
  holidays: string[];

  @ManyToOne(() => UserEntity, user => user.calendars, { onDelete: 'CASCADE' })
  user: UserEntity;
}
