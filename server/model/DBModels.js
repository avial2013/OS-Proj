// Create the model for each object:
const mongoose = require('mongoose');

// Schema Models - collection:

// 1
let QuestionSchema = new mongoose.Schema(
    {
        questionNum: Number, 
        questionStr: String,
        isTrue: Boolean,
        category: Object,
        grade: Number,
    },
    {
        strict: false
    }
)

// 2
let RestaurantSchema = new mongoose.Schema(
    {
        name: String,
        img: String,
        address: String,
        contact: String,
        openingHours: String,
        grade: String,
    },
    {
        strict: false
    }
)


// Use model to export all Schemas:
const RestaurantModel = mongoose.model("RestaurantSchema", RestaurantSchema); // 1
const QuestionModel = mongoose.model("QuestionSchema", QuestionSchema); // 2



// Export the models outside the file:
module.exports = {RestaurantModel,QuestionModel};