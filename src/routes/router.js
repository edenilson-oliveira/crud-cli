import express from 'express'
import UserController from '../controllers/UserController.js'

const router = express.Router()

router.get('/users/', UserController.findAll)
router.get('/users/:id',UserController.findById)
router.post('/users/', UserController.createUser)
router.delete('/users/:id', UserController.deleteUser)
router.patch('/users/:id', UserController.updateUser)

export default router