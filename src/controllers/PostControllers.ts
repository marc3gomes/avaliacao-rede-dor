import { Request, Response } from 'express'
import { prisma } from '../database'

export default {
  async createPost(req: Request, res: Response) {
    try {
      const { title, content, authorId } = req.body

      const post = await prisma.post.create({
        data: {
          title,
          content,
          authorId
        }
      })

      return res.json({
        error: false,
        message: 'Sucesso: Post cadastrado com sucesso!',
        post
      })
    } catch (error) {
      return res.json({ message: error.message })
    }
  },

  async listPost(req: Request, res: Response) {
    try {
      const { id } = req.params

      const post = await prisma.post.findUnique({
        where: {
          id: Number(id)
        }
      })

      if (!post) {
        return res.json({
          error: true,
          message: 'Error: Post não encontrado!'
        })
      }

      return res.json({
        error: false,
        message: 'Sucesso: Post cadastrado com sucesso!',
        post
      })
    } catch (error) {
      return res.json({ message: error.message })
    }
  },

  async updatePost(req: Request, res: Response) {
    try {
      const { id, title, content } = req.body

      const postExists = await prisma.post.findUnique({
        where: {
          id: Number(id)
        }
      })

      if (!postExists) {
        return res.json({
          error: true,
          message: 'Error: Post não encontrado!'
        })
      }

      const post = await prisma.post.update({
        where: {
          id: Number(req.body.id)
        },
        data: {
          title,
          content
        }
      })

      return res.json({
        error: false,
        message: 'Sucesso: Post atualizado com sucesso!',
        post
      })
    } catch (error) {
      return res.json({ message: error.message })
    }
  },

  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params

      const postExists = await prisma.post.findUnique({
        where: {
          id: Number(id)
        }
      })

      if (!postExists) {
        return res.json({
          error: true,
          message: 'Error: Post não encontrado!'
        })
      }

      const post = await prisma.post.delete({
        where: {
          id: Number(req.params.id)
        }
      })

      return res.json({
        error: false,
        message: 'Sucesso: Post deletado com sucesso!',
        post
      })
    } catch (error) {
      return res.json({ message: error.message })
    }
  }
}
