import { NotFoundError } from '../../helpers/api-erros'
import prisma from '../../../prisma'

interface DeleteUserProps {
  id: number | string
}

class DeleteUserService {
  async execute({ id }: DeleteUserProps) {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!user) {
      throw new NotFoundError('Cliente não existe!')
    }

    await prisma.user.delete({
      where: {
        id: user.id
      }
    })

    return { message: 'Deletado com sucesso!' }
  }
}

export default DeleteUserService
