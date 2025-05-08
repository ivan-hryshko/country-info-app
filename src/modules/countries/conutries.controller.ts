import { Request, Response } from 'express'
import { CountriesServiceItem } from './service/item-countries.service'
import { CountriesServiceList } from './service/list-countries.service'
import { Logger } from '../../utils/logger'

export class CountriesController {
  static async list(req: Request, res: Response): Promise<void> {
    try {
      const countries = await CountriesServiceList.list()
      res.json({ data: { countries } })
    } catch (error) {
      Logger.error('Failed to fetch countries:', error)
      res.status(500).json({ message: 'Failed to fetch countries', error })
    }
  }
  static async item(req: Request, res: Response): Promise<void> {
    try {
      const countryInfo = await CountriesServiceItem.item({ ...req.params })
      res.json({ data: countryInfo })
    } catch (error) {
      Logger.error('Failed to fetch countries:', error)
      res.status(500).json({ message: 'Failed to fetch countries', error })
    }
  }
}
