import { Router } from "express"
import countriesRoutes from '../modules/countries/countries.route'
import calendars from '../modules/calendar/calendar.route'

const routes = Router()

routes.use('/countries', countriesRoutes)
routes.use('/', calendars)

export default routes
