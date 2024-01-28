import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError
} from '../../../helpers/api-erros'
import prisma from '../../../prisma'

interface UpdateUserProps {
  id: number | string
  email: string
  name: string
}

class UpdateUserService {
  async execute({ id, email, name }: UpdateUserProps) {
    if (!id) {
      throw new BadRequestError('Solicitação invalida!')
    }

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!user) {
      throw new NotFoundError('Cliente não existe!')
    }

    const userExist = await prisma.user.findUnique({
      where: { email }
    })

    if (userExist) {
      throw new UnauthorizedError('Esse e-mail já está em uso!')
    }

    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        email,
        name
      }
    })

    return { message: 'Atualizado com sucesso!' }
  }
}

export default UpdateUserService
