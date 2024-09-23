const express = require('express')
const dbcon = require('./config/db')
const project = require('./routes/ProjectRoute')
const app = express()

require('dotenv').config()
app.use(express.json())

const port = process.env.PORT || 7777
app.use('/project', project)

app.get('/', (req, res) => {
    res.json({ message: "Welcome" })
})

app.listen(port, () => {
    console.log(`server is running in port : ${port}`)
})