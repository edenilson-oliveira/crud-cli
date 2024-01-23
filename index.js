import express from 'express';
import dotenv from 'dotenv'
import router from './src/routes/router.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use(router)

app.get('/',(req,res) => {
  res.send('Funcionando').status(200)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
