import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const userService = new DeleteUserService()

    const user = await userService.execute({ id })

    res.send(user)
  }
}

export default DeleteUserController
