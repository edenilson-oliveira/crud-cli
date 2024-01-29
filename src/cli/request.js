import axios from 'axios'


const viewUsers = async () => {
  const users = await axios.get('http://localhost:3000/users')
  .then(result => console.log(result.data))
  .catch(err => console.log(err))
}

const viewUsersById = async (id) => {
  return axios.get(`http://localhost:3000/users/${id}`)
  .then(result => result.data)
  .catch(err => err)
}


const create = async (response) => {
  await axios.post('http://localhost:3000/users', response)
  .then(() => console.log('user created with sucess'))
  .catch(err => console.log(`user not created ${err}`))
}

const edit = async (response,id) => {
  await axios.patch(`http://localhost:3000/users/${id}`, response)
  .then(() => console.log('user edited with sucess'))
  .catch(err => console.log(`user not edited ${err}`))
}

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/users/${id}`)
  .then(() => console.log('user deleted with sucess'))
  .catch(err => console.log(`user not deleted ${err}`))
}

export default { viewUsers,viewUsersById,create,edit,deleteUser }