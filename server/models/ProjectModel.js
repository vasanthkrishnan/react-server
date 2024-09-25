const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tools: {
        type: String,
        required: false
    },
    desc : {
        type: String,
        required: true
    }
})

const Projects = mongoose.model("Projects", projectSchema)
module.exports = Projects