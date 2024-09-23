const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB || "mongodb+srv://krish:1234@in-aws.8v7mf.mongodb.net/krish?retryWrites=true&w=majority&appName=in-aws")

const connection = mongoose.connection
connection.on('connected', () => {
    console.log("DB connected");
})

connection.on('error', (error) => {
    console.log("Error" + error)
})


module.exports = mongoose