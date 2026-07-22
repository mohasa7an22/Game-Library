const router = require("express").Router({ mergeParams: true })
const Games = require('../models/games')
const Review = require('../models/reviews')
const isSignedIn = require("../middleware/is-signed-in")

// Create
router.get('/newReview', isSignedIn, async (req, res) => {
    const game = await Games.findById(req.params.gameId)
    res.render('reviews/review.ejs', { game })
})

router.post('/', isSignedIn, async (req, res) => {
    try {
        const game = await Games.findById(req.params.gameId)

        const createdReview = await Review.create({
            title: req.body.title,
            reviewBody: req.body.reviewBody,
            reviewStatus: game.status,
            owner: req.session.user._id,
            reviewedGame: game._id
        })

        game.gameReviews.push(createdReview._id)
        await game.save()

        res.redirect(`/games/${req.params.gameId}`)
    } catch (err) {
        console.log(err)
        res.send('ERROR CREATING REVIEW')
    }
})

// Read routes
router.get('/:reviewId', isSignedIn, async (req, res) => {
    const foundReview = await Review.findById(req.params.reviewId).populate('owner')
    res.render('reviews/review-edit.ejs', { review: foundReview })
})

module.exports = router
