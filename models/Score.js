const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ScoreSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    score: { 
        type: Number, 
        required: true 
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }
})

const Score = mongoose.model("scores", ScoreSchema);

module.exports = Score;