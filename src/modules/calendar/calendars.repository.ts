import appDataSource from '../../config/app-data-source'
import { CalendarEntity } from './calendars.entity'

type CalendarCreateParams = {
  userId: number
}
type CalendarItemParams = {
  id: number
}

export const calendarsRepository = appDataSource.getRepository(CalendarEntity).extend({
  async createAndSave(params: CalendarCreateParams): Promise<CalendarEntity> {
    const calendar = new CalendarEntity()
    calendar.user = { id: params.userId } as any
    calendar.holidays = []
    await this.save(calendar)
    return calendar
  },

  async getById(query: CalendarItemParams): Promise<any> {
    const calendar = await this.findBy({ id: query.id })
    return calendar
  },
})
