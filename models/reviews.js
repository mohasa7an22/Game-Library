const mongoose = require('mongoose')

// Schema
const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    reviewBody: {
        type: String,
        maxLength: 350,
    },
    // reviewStatus: {
    //     type: String,
    //     required: true,
    //     enum:["Did not start","In Progress", "Dropped","Finished"]
    // },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    reviewedGame: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Games"
    }

}, { timestamps: true })

// model
const Review = mongoose.model('Review', reviewSchema)

module.exports = Review