import { NotFoundError } from '../../../helpers/api-erros'
import prisma from '../../../prisma'

interface UserProps {
  id: number | string
}

class UserService {
  async execute({ id }: UserProps) {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!user) {
      throw new NotFoundError('Usuário não existe!')
    }
    return user
  }
}

export default UserService
