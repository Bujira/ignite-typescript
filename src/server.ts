import express, { request, response } from 'express'

import { createCourse } from './routes'

const app = express()

app.use(express.json())

app.get("/", createCourse)

app.listen(3000, () => console.log('Server is running...'))