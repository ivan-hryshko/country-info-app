import { Router } from 'express'
import countriesRoutes from '../modules/countries/countries.route'
import calendars from '../modules/calendar/calendar.route'
import users from '../modules/users/users.route'

const routes = Router()

routes.use('/countries', countriesRoutes)
routes.use('/', calendars)
routes.use('/users', users)

export default routes
