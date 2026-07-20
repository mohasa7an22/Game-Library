const mongoose = require('mongoose')


// Schema
const gamesSchema = new mongoose.Schema({
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
    reviews:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review"
    }
})


// model
const Games = mongoose.model('Games',gamesSchema)

module.exports = Games