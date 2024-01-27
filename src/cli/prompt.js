import inquirer from 'inquirer'
import axios from 'axios'
import request from './request.js'

const getData = async (id) => {
  const  user = await axios.get(`http://localhost:3000/${id}`).then(result => result.data)
  
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
 
export default getData
