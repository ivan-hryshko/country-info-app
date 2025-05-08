import { Router } from "express"
import { CountriesController } from "./conutries.controller"

const routes = Router()

routes.get('/list', CountriesController.list)

export default routes