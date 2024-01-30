import UserModel from '../models/model.js'

const findAll = async (req,res) => {
  try{
    const user = await UserModel.findAll({})
    res.json(user).status(200)
  }
  catch{
    res.json({ message: 'Internal server error'}).status(500)
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
    res.json({ message: 'Internal server error'}).status(500)
  }
}

const createUser = async (req,res) => {
  try{
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
    
  }
  catch{
    res.json({ message: 'Internal server error'}).status(500)
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
    
    if(user){
      res.json({message: "sucess"}).status(200)
    }
    else{
      res.json({ message: 'User Not Found'}).status(404)
    }
  }
  
  catch{
    res.json({ message: 'Internal server error'}).status(500)
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
    
    if(user){
      const userReponse = await UserModel.findByPk(id)
      res.json(userReponse).status(200)
    }
    else{
      res.json({ message: 'User Not Found'}).status(404)
    }
  }
  catch(err){
    res.json({ message: 'Internal server error'}).status(500)
  }
}

export default { findAll,findById,createUser,deleteUser,updateUser }