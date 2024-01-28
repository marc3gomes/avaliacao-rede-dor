import { testServer } from '../../../tests/jest.setup'

describe('UpdateUserService', () => {
  it('should check if an id was passed', async () => {
    const updateUser = await testServer.put('/users').send({
      name: 'Test',
      email: 'test@test.com'
    })

    expect(updateUser.statusCode).toEqual(400)
  })

  it('should check if the client exists', async () => {
    const updateUser = await testServer.put('/users').send({
      id: 99999,
      name: 'Test',
      email: 'test@test.com'
    })
    expect(updateUser.statusCode).toEqual(404)
  })

  it('should check if the email is already registered', async () => {
    const updateUser = await testServer.put('/users').send({
      id: 2,
      name: 'Test',
      email: 'test@test.com'
    })
    expect(updateUser.statusCode).toEqual(401)
  })

  it('should user updated successfully', async () => {
    const updateUser = await testServer.put('/users').send({
      id: 2,
      name: 'John Doe',
      email: 'demo@demo.com'
    })
    expect(updateUser.statusCode).toEqual(401)
  })
})
