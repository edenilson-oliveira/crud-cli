import express from 'express'
const router = express.Router()
import { UserGet,UserAdd } from '../controllers/UserController.js'

router.get('/users', UserGet)
router.post('/users', UserAdd)

export default router