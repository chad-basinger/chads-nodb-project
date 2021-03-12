const express = require('express')
const app = express()
const uc = require('./controllers/users_controller.js')

app.use(express.json())
const usersBaseURL = '/api/users'

//get
app.get(`${usersBaseURL}`, uc.read)
//post
app.post(`${usersBaseURL}`, uc.create)
//put
app.put(`${usersBaseURL}`, uc.update)
//delete
app.delete(`${usersBaseURL}`, uc.delete)

const port = 4040;
app.listen(port, () => console.log(`Server is running on port ${port}`))