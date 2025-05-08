import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CalendarEntity } from '../calendar/calendars.entity';

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CalendarEntity, calendar => calendar.user)
  calendars: CalendarEntity[];
}
