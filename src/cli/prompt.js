import inquirer from 'inquirer'
import axios from 'axios'
import request from './request.js'

const showPrompts = async (id) => {
  const  user = await request.viewUsersById(id)
  
  
  if(user.length > 0){
    await inquirer
    .prompt([
      {
        name: 'firstName',
        message: 'firstName:',
        default: user[0].firstName
      },
      {
        name: 'lastName',
        message: 'lastName:',
        default: user[0].lastName
      },
      {
        name: 'email',
        message: 'email:',
        default: user[0].email
      },
      {
        name: 'password',
        message: 'password:',
        default: user[0].password
      },
      ]).then(answer => {
        if(request === 'post'){
           request.create(answer)
           return true
        }
        request.edit(answer,id)
    })
  }
  else{
    console.log('id not exists')
  }
}
 
export default showPrompts
