import express from 'express'
import UserController from '../controllers/UserController.js'

const router = express.Router()

router.get('/', UserController.findAll)
router.get('/:id',UserController.findById)
router.post('/', UserController.createUser)
router.delete('/:id', UserController.deleteUser)
router.patch('/:id', UserController.updateUser)

export default router