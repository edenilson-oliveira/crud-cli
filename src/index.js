import express from 'express';
import 'dotenv/config'

import router from './routes/router.js'
import connection from './database/index.js'

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
