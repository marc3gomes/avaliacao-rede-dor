import { Request, Response } from 'express'
import { prisma } from '../database'

export default {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body
      const userExist = await prisma.user.findUnique({
        where: { email }
      })

      if (userExist) {
        return res.json({
          error: true,
          message: 'Erro: Usuário já existe!'
        })
      }
      const user = await prisma.user.create({
        data: {
          name,
          email
        }
      })

      return res.json({
        error: false,
        message: 'Sucesso: Usuário cadastrado com existe!',
        user
      })
    } catch (error) {
      return res.json({ message: error.message })
    }
  },

  async listUser(req: Request, res: Response) {
    try {
      const { id } = req.params

      const user = await prisma.user.findUnique({
        where: {
          id: Number(id)
        }
      })

      if (!user) {
        return res.json({
          error: true,
          message: 'Error: User não encontrado!'
        })
      }

      return res.json({
        error: false,
        message: 'Sucesso: User cadastrado com sucesso!',
        user
      })
    } catch (error) {
      return res.json({ message: error.message })
    }
  }
}
