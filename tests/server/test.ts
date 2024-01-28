import { testServer } from '../jest.setup'

describe('Server running', () => {
  it('should test the server running', async () => {
    const route = await testServer.get('/')

    expect(route.body).toStrictEqual({ Status: 'Server running' })
  })
})
