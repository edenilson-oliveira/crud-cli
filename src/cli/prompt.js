import inquirer from 'inquirer'
import axios from 'axios'

//tests
const getData = async () => {
  const users = await axios.get(`http://localhost:3000/13`).then(result => result.data)
  console.log(users)
}
getData()
/*
inquirer
  .prompt([
    {
      name: 'firstName',
      message: 'firstName:'
      
    },
    {
      name: 'lastName',
      message: 'lastName:'
    },
    {
      name: 'email',
      message: 'email:'
    },
    {
      name: 'password',
      message: 'password:'
    },
    ]).then(answer => console.log(answer))
    
export default inquirer*/
