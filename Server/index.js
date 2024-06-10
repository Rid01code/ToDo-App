const express = require('express')
const cors = require('cors')
const path = require("path");
require('./connection/connection')
const userApi = require('./routes/users')
const taskApi = require('./routes/task')
const app = express()


const port = 5000


app.use(cors())


app.use('/app', userApi)

app.use('/app/task' , taskApi)


app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "Front-End", "build")));
res.sendFile(path.resolve(__dirname, "Front-End", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})