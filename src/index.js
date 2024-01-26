import express from 'express';
import dotenv from 'dotenv'

import router from './routes/router.js'
import connection from './database/index.js'

import commander from './cli/index.js'

dotenv.config()


const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
