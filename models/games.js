const mongoose = require('mongoose')


// Schema
const gameSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    image:{
        type:String
    },
    platfrom:{
        type: String,
        required:true
    },
    status:{
        type: String,
        required: true
    },
    gameReviews:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review"
    }
},{timestamps:true})


// model
const Game = mongoose.model('Games',gameSchema)

module.exports = Game