import inquirer from 'inquirer'
import axios from 'axios'
import request from './request.js'

const showPrompts = async (id) => {
  const  user = await request.viewUsersById(id)
  await inquirer
  .prompt([
    {
      name: 'firstName',
      message: 'firstName:',
      default: user[0] ? user[0].firstName : ''
    },
    {
      name: 'lastName',
      message: 'lastName:',
      default: user[0] ? user[0].lastName : ''
    },
    {
      name: 'email',
      message: 'email:',
      default: user[0] ? user[0].email : ''
    },
    {
      name: 'password',
      message: 'password:',
      default: user[0] ? user[0].password : ''
    },
    ]).then(answer => {
      if(!user[0]){
         request.create(answer)
         return true
      }
      
      request.edit(answer,id)
    })
}
 
export default showPrompts
