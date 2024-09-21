import express from 'express'

import { APIController } from './controller'

export const api = express()
const router = express.Router()

const controller = new APIController()

router.get('/:username', controller.fetchProfile)
router.get('/:username/repos', controller.fetchRepos)

api.use(router)
