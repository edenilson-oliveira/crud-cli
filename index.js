import express from 'express';

const app = express()

app.get('/',(req,res) => {
  res.send('Funcionando').status(200)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})