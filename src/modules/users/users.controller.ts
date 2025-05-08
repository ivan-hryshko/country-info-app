import { Request, Response } from 'express'
import { Logger } from '../../utils/logger'
import { UsersService } from './users.service'

export class UsersController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const user = await UsersService.create()
      res.status(201).json({ data: { user } })
    } catch (error) {
      Logger.error('Failed to create user:', error)
      res.status(500).json({ message: 'Failed to craetea user', error })
    }
  }
}
