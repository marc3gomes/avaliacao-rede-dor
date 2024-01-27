import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const userService = new UserService()

    const user = await userService.execute({ id })

    res.status(302).send(user)
  }
}

export default DeleteUserController
