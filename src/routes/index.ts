import { Router } from "express"
import countriesRoutes from '../modules/countries/countries.route'

const routes = Router()

routes.use('/countries', countriesRoutes)

export default routes
