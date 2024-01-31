# Description

This project is a simple CRUD, usuing a cli to get,criar,edit and delete users.

### Methods http

- GET: /users
- GET: /users/:id
- POST: /users
- PATCH: /users/:id
- DELETE: /users/:id

# Getting started
- Install the dependecies
```bash
   npm install
```

- Configure the file .env
- Initialize the server
  
```bash
  node src/index.js
```
- In other session use the cli
```bash
  node src/cli/index.js -h
```
# Tecnologies

- Nodejs
- Express
- Axios
- Sequelize
- Commander
- Inquirer
