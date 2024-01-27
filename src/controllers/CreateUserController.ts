import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'

class CreateCustomerController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body
    const userService = new CreateUserService()

    const user = await userService.execute({ name, email })

    res.status(201).send(user)
  }
}

export default CreateCustomerController
