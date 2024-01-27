import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {
  async handle(req: Request, res: Response) {
    const usersService = new UsersService()

    const users = await usersService.execute()

    res.status(302).send(users)
  }
}

export default UsersController
