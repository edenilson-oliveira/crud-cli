import UserModel from '../models/model.js'

const findAll = async (req,res) => {
  const user = await UserModel.findAll()
  res.status(200)
  res.json(user)
}

const createUser = async (req,res) => {
  const user = await UserModel.create(req.body)
  
}

export default { findAll,createUser }