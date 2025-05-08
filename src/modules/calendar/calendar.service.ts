import axios from 'axios'
import { usersRepository } from '../users/users.repository'
import appDataSource from '../../config/app-data-source'
import { UserEntity } from '../users/users.entity'
import { CalendarEntity } from './calendars.entity'

export class CalendarService {
  static validateAddHolidays(payload: any) {
    const { countryCode, year, holidays } = payload
    if (!countryCode || !year || !holidays) {
      throw new Error('Missing required fields: countryCode, year, holidays')
    }
    if (typeof countryCode !== 'string') {
      throw new Error('Invalid countryCode: should be a string')
    }
    if (typeof year !== 'number') {
      throw new Error('Invalid year: should be a number')
    }
    if (!Array.isArray(holidays)) {
      throw new Error('Invalid holidays: should be an array')
    }
    const userId = parseInt(payload.userId)
    if (userId && typeof userId !== 'number') {
      throw new Error('Invalid userId: should be a number')
    }

    return { countryCode, year, holidays, userId }
  }

  static async addHolidays(payload: any) {
    const { countryCode, year, holidays, userId } = this.validateAddHolidays(payload)
    const user = await appDataSource.getRepository(UserEntity).findOne({
      where: { id: userId },
      relations: ['calendar'],
    })
    if (!user) {
      throw new Error('User not found')
    }
    const resHolidays = await axios.get(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
    )
    const holidaysData = resHolidays.data
    const matched = holidaysData.filter((h: any) => holidays.includes(h.name))

    user.calendar.holidays = matched
    await appDataSource.getRepository(CalendarEntity).save(user.calendar)

    return user.calendar
  }
}
