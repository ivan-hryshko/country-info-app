import { Router } from 'express'
const routes = Router()
import { UsersController } from './users.controller'

routes.post('/', UsersController.create)

export default routes
