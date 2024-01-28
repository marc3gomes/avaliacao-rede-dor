import { app } from './server/server'
import 'dotenv/config'

const start = () => {
  app.listen(process.env.PORT_SERVIDOR || 8000, () => {
    console.log(
      `O servidor está sendo executado na porta ${process.env.PORT_SERVIDOR}`
    )
  })
}

start()
