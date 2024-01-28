import prisma from '../../../prisma'
import { testServer } from '../../../tests/jest.setup'

describe('CreateUserService', () => {
  it('should check if the user exists', async () => {
    const createUser = await testServer.post('/users').send({
      name: 'Test',
      email: 'test@test.com'
    })

    expect(createUser.statusCode).toEqual(401)
  })

  it('should check if create user', async () => {
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' }
    })

    const userID = user?.id

    const deleteUser = await testServer.delete(`/users/${userID}`)

    expect(deleteUser.statusCode).toEqual(200)

    const createUser = await testServer.post('/users').send({
      name: 'Test',
      email: 'test@test.com'
    })

    expect(createUser.statusCode).toEqual(201)
  })

  it('should check if the json body is correct', async () => {
    const createUser = await testServer.post('/users').send({})

    expect(createUser.statusCode).toEqual(400)
  })
})
