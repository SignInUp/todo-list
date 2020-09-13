import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import todoEndpoint from './endpoints/todo'
import sequelize from './config/database'

dotenv.config()
sequelize()

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/todo', todoEndpoint)

app.listen(process.env.API_PORT, () => {
  console.log(`Server started on ${process.env.API_PORT} port`)
})
