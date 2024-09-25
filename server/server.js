
require('dotenv').config()
const express = require('express')
const dbcon = require('./config/db')
const cors = require('cors')
const project = require('./routes/ProjectRoute')
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 7777
app.use('/projects', project)

app.get('/', (req, res) => {
    res.status(200).json("welcome")
})

app.listen(port, () => {
    console.log(`server is running in port : ${port}`)
})