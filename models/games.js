const mongoose = require('mongoose')


// Schema
const gamesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true,
        enum: ["Action", "Platform", "Shooter", "Fighting", "Beat'em up ", "stealth","Survival", "Rhythm", "Battle Royale", "MetroidVania", "Adventure", "Visual Novel", "Puzzle", "RPG", "Horror", "Rougelikes", "Rougelites", "Soulslike","Simulation", "Tower Defense", "Racing", "Indie", "Gacha","Party"]
    },
    image:{
        type:String
    },
    platform:{
        type: String,
        required:true,
        enum:["Steam", "Epic Games", "Gog", "Rockstar","Playstation 1","Playstation 2","Playstation 3", "Playstation 4", "Playstation 5", "Xbox 1", "Xbox series X", "Nintendo Switch", "Nintendo Switch 2"]
    },
    status:{
        type: String,
        required: true,
        enum: ["Did not start","In Progress", "Dropped","Finished"]
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    savedBy:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }],
    gameReviews:[{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review"
    }]
},{timestamps:true})


// model
const Games = mongoose.model('Games',gamesSchema)

module.exports = Games