import { testServer } from '../../../tests/jest.setup'

describe('UserService', () => {
  it('should list the user', async () => {
    const updateUser = await testServer.get('/users/2')
    expect(updateUser.statusCode).toEqual(302)
  })

  it('return that the user does not exist', async () => {
    const updateUser = await testServer.get('/users/99999')
    expect(updateUser.statusCode).toEqual(404)
  })
})
