import prisma from '../../prisma'

class UsersService {
  async execute() {
    const users = await prisma.user.findMany()
    return users
  }
}

export { UsersService }
