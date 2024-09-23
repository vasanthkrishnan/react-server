const express = require('express')
const router = express.Router()
const Projects = require('../models/ProjectModel')

router.get('/all', async (req, res) => {
    try {
        const fetchedProjects = await Projects.find()
        res.json(fetchedProjects).status(200)
    } catch (error) {
        res.json(error).status(400)
    }
})

router.post('/add', async (req, res) => {
    try {
        const newProjectData = await new Projects(req.body)
        const { title, desc } = newProjectData
        if(!title || !desc) {
            res.json({message: "Title & Desc Required"}).status(200)
        }
        const savedData = await newProjectData.save()
        res.json(savedData).status(201)
    } catch (error) {
        res.json(error).status(400)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const currentRecord = await Projects.findOne({_id: id})
        if(!currentRecord) {
            res.status(500).json({message:"Project not fount!"})
        }
        const updatedProduct = await Projects.findByIdAndUpdate(id, req.body({new : true}))
        res.status(200).json(updatedProduct)  
    } catch (error) {
        res.status(500).json({message: "error"})
    }

})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const currentRecord = await Projects.findOne({_id: id})
        if(!currentRecord) {
            res.status(500).json({message: "Project not found"})
        }
        const deletedProject = await Projects.findByIdAndDelete(id)
        res.status(200).json({message: "Project deleted Successfully"})
    } catch (error) {
        res.status(500).json({message: "Unable to delete"})
    }
})

module.exports = router