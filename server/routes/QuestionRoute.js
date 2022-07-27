// This file will contain all the routes for questions

const express = require('express');
const {QuestionModel} = require('../model/DBModels');

// Create internal router:
const router = express.Router();

// GET - Get all questions:
router.get('/', (req, res)=>{
    // find() - is a mongoDB command to get all objects
    // exec() -> will run the command in the db. 
    QuestionModel.find({}).exec((err, questions) => {
        if (err) console.log(err.message);
        else res.json(questions);
    })
})

// export the file
module.exports = router;