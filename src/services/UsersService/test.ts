import { testServer } from '../../../tests/jest.setup'

describe('UserService', () => {
  it('should list the user', async () => {
    const updateUser = await testServer.get('/users')
    expect(updateUser.statusCode).toEqual(302)
  })
})
