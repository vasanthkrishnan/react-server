const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODBURL)

const connection = mongoose.connection
connection.on('connected', () => {
    console.log("DB connected");
})

connection.on('error', (error) => {
    console.log("Error" + error)
})


module.exports = mongoose