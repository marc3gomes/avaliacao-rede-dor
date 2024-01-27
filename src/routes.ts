import CreateUserController from './controllers/CreateUserController'
import UsersController from './controllers/UsersController'
import DeleteUserController from './controllers/DeleteUserController'
import UserController from './controllers/UserController'
import UpdateUserController from './controllers/UpdateUserController'
import { Router } from 'express'

const router = Router()

router.post('/users', new CreateUserController().handle)

router.get('/users/:id', new UserController().handle)

router.get('/users', new UsersController().handle)

router.delete('/users/:id', new DeleteUserController().handle)

router.put('/users', new UpdateUserController().handle)

export { router }
