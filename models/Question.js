const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QustionSchema = new Schema({
    question: { 
        type: String, 
        required: true 
    },
    correct: { 
        type: String, 
        required: true 
    },
    incorrect: { 
        type: Array, 
        required: true 
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const Question = mongoose.model("questions", QustionSchema);

module.exports = Question;