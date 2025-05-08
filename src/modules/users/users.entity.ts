import { Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { CalendarEntity } from '../calendar/calendars.entity';

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => CalendarEntity, calendar => calendar.user)
  calendar: CalendarEntity;
}
