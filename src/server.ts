import Express from 'express'
import UserControllers from './controllers/UserControllers'
import PostControllers from './controllers/PostControllers'

const app = Express()
app.use(Express.json())
const PORT = 8000

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World ' })
})

app.post('/createUser', UserControllers.createUser)
app.post('/createPost', PostControllers.createPost)
app.get('/listPost/:id', PostControllers.listPost)
app.get('/listUser/:id', UserControllers.listUser)
app.put('/updatePost', PostControllers.updatePost)
app.delete('/deletePost/:id', PostControllers.deletePost)

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})
