import express from 'express'

import { APIController } from './controller'

export const api = express()
const router = express.Router()

const controller = new APIController()

api.use(router)
