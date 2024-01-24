import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const connection = new Sequelize(process.env.DATABASE_URL)

export default connection