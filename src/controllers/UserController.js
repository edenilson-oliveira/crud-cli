import UserModel from '../models/model.js'

const findAll = async (req,res) => {
  try{
    const user = await UserModel.findAll({})
    res.json(user).status(200)
  }
  catch(err){
    res.json({message: 'Error 400', error: err}).status(400)
  }
}

const findById = async (req,res) => {
  try{
    const { id } = req.params
    const user = await UserModel.findAll({
      where: {
        id: id
      }
    })
    res.json(user).status(200)
  }
  catch{
    res.json({message: 'Erro 400'}).status(404)
  }
}

const createUser = async (req,res) => {
  try{
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
    
  }
  catch(err){
    res.json({message: 'Error 400'}).status(400)
  }
  
}

const deleteUser = async (req,res) => {
  try{
    const { id } = req.params
    const user = await UserModel.destroy({
      where: {
        id: id
      }
    })
    res.status(204)
  }
  catch{
    res.json({ message: 'Error 404'}).status(404)
  }
}

const updateUser = async (req,res) => {
  try{
    const { id } = req.params
    const user = await UserModel.update(req.body,{
      where: {
        id: id
      }
    })
    res.json(user).status(200)
  }
  catch(err){
    console.log(err)
    res.json({ message: 'Error 400'}).status(400)
  }
}

export default { findAll,findById,createUser,deleteUser,updateUser }