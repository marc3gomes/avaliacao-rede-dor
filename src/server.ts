import 'express-async-errors'
import Express from 'express'
import 'dotenv/config'
import { errorMiddleware } from '../middlewares/error'
import { router } from './routes'

const app = Express()

app.use(Express.json())

app.use(router)

app.use(errorMiddleware)

const start = () => {
  app.listen(process.env.PORT_SERVIDOR || 8000, () => {
    console.log(`server is running ${process.env.PORT_SERVIDOR}`)
  })
}

start()
