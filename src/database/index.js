import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const connection = new Sequelize(process.env.DATABASE_URL)

connection.sync().then(() => {
  console.log('The table users created sucess')
}).catch((err) => {
  console.log('The table users not created', err)
})

export default connection