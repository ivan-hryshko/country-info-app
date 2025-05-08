import { Router } from "express"
import { CalendarController } from "./calendar.controller"
const routes = Router()

routes.post('/users/:userId/calendar/holidays', CalendarController.addHolidays)

export default routes