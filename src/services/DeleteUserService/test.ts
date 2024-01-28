import prisma from '../../../prisma'
import { testServer } from '../../../tests/jest.setup'

describe('DeleteUserService', () => {
  it('should check if the client exists', async () => {
    const createUser = await testServer.delete('/users/99999')

    expect(createUser.statusCode).toEqual(404)
  })

  it('check if the user has been deleted', async () => {
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
})
