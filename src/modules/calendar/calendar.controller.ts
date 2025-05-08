import { Request, Response } from 'express'
import { Logger } from '../../utils/logger'
import { CalendarService } from './calendar.service'

export class CalendarController {
  static async addHolidays(req: Request, res: Response): Promise<void> {
    try {
      const holidays = await CalendarService.addHolidays({ ...req.params, ...req.body })
      res.status(201)
      res.json({ data: { holidays } })
    } catch (error) {
      Logger.error('Failed to fetch countries:', error)
      res.status(500).json({ message: 'Failed to fetch countries', error })
    }
  }
}
