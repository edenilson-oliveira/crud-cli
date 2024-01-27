import axios from 'axios'


const viewUsers = async () => {
  const users = await axios.get('http://localhost:3000/').then(result => result.data)
  console.log(users)
}

const create = async (response) => {
  await axios.post('http://localhost:3000/', response)
}

const edit = async (response,id) => {
  await axios.patch(`http://localhost:3000/${id}`, response)
}

const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/${id}`)
}

export default { viewUsers,create,edit,deleteUser }