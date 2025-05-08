import { DataSource } from 'typeorm'
import ENVS from './envs'
import { UserEntity } from '../modules/users/users.entity'
import { CalendarEntity } from '../modules/calendar/calendars.entity'

console.log('ENVS :>> ', ENVS)

const entities = [UserEntity, CalendarEntity]

const appDataSource = new DataSource({
  type: 'postgres',
  host: ENVS.PG_HOST,
  port: parseInt(ENVS.PG_PORT || '5432'),
  username: ENVS.PG_USERNAME,
  password: ENVS.PG_PASSWORD,
  database: ENVS.PG_DATABASE,
  entities,
  logging: true,
  synchronize: true,
})

export default appDataSource
