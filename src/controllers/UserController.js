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

const createUser = async (req,res) => {
  try{
    const user = await UserModel.create(req.body).status(200).json(user)
  }
  catch(err){
    res.json({message: 'Error 404'}).status(405)
  }
  
}

const deleteUser = async (req,res) => {
  try{
    const { id } = req.params
    const user = await UserModel.destroy({
      where: {
        id: id
      }
    }).status(200)
  } catch{
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
    }).status(200)
  }
  catch{
    res.json({ message: 'Erro 404'}).status(404)
  }
}

export default { findAll,createUser,deleteUser,updateUser }