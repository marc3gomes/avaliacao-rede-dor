import { BadRequestError, UnauthorizedError } from '../../../helpers/api-erros'
import prisma from '../../../prisma'

interface CreateUserProps {
  name: string
  email: string
}
class CreateUserService {
  async execute({ name, email }: CreateUserProps) {
    if (!name || !email) {
      throw new BadRequestError('Body ou json com conteúdos inválidos.')
    }

    const userExist = await prisma.user.findUnique({
      where: { email }
    })

    if (userExist) {
      throw new UnauthorizedError('O e-mail já está em uso!')
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user
  }
}

export default CreateUserService
