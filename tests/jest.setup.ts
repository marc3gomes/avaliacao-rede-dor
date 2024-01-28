import { app } from '../src/server/server'
import supertest from 'supertest'

export const testServer = supertest(app)
