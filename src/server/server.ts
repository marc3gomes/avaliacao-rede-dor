import 'express-async-errors'
import { errorMiddleware } from '../../middlewares/error'
import express from 'express'
import router from './routes'

const app = express()
app.use(express.json())

app.use(router)

app.use(errorMiddleware)

export { app }
