const express = require('express');
const notemodel = require('./Model/notes.model');

const app = express();

app.use(express.json());

app.post('/notes', async (req, res) => {
    try {
        const { title, description } = req.body;

        await notemodel.create({
            title,
            description
        });

        res.status(201).send({
            message: "Note created successfully"
        });

    } catch (error) {
        res.status(500).send({
            message: "Error creating note",
            error: error.message
        });
    }
});

app.get('/notes', async (req, res) => {
    const notes = await notemodel.findOne({
        title: "hi nazuu bujji"
    });

    res.status(200).send({
        message: "notes fetched successfully",
        Notes: notes
    })
    console.log("Fetched succesfully");
})

app.delete('/notes/:id', async (req, res) => {
    const index = req.params.id;

    await notemodel.findByIdAndDelete(index);

    res.status(200).send({
        message:"Note Deleted successfully"
    })
})

app.patch('/notes/:id',async(req,res)=>{
    const index = req.params.id;

    await notemodel.findByIdAndUpdate(index,{
        title:"hi ummah",
        description:" null"
    })

    res.status(200).send({
        message:"Updated succesfully"
    })
})

module.exports = app;