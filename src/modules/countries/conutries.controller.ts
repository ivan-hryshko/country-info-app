import { Request, Response } from 'express'
import { CountriesService } from './countries.service'

export class CountriesController {
  static async list(req: Request, res: Response): Promise<void>{
    try {
      const countries = await CountriesService.list()
      res.json(countries)
    } catch (error) {
      // Logger.error('Error getting movie:', error)
      res.status(500).json({ message: 'Error getting movie', error })
    }
  }
}