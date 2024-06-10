const express = require('express')
const cors = require('cors')
require('./connection/connection')
const userApi = require('./routes/users')
const taskApi = require('./routes/task')
const app = express()


const port = 5000


app.use(cors())


app.use('/app', userApi)

app.use('/app/task' , taskApi)

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})