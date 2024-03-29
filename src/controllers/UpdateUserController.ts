import { Request, Response } from 'express'
import UpdateUserService from '../services/UpdateUserService'

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id, email, name } = req.body
    const userService = new UpdateUserService()

    const user = await userService.execute({ id, email, name })

    res.status(200).send(user)
  }
}

export default UpdateUserController
