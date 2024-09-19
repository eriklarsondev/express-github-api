import { APIService } from './service'

export class APIController extends APIService {
  constructor() {
    super()
  }

  async fetchRepos(req, res, next) {
    try {
      const data = await super.fetchRepos(req.params.username)
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}
