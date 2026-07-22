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

// Update
router.put('/:reviewId', isSignedIn, async (req, res) => {
    const review = await Review.findById(req.params.reviewId)

    if (!review.owner.equals(req.session.user._id)) {
        return res.send("You don't have permission to do that")
    }

    await Review.findByIdAndUpdate(req.params.reviewId, req.body)
    res.redirect(`/games/${req.params.gameId}`)
})

// Delete
router.delete('/:reviewId', isSignedIn, async (req, res) => {
    const review = await Review.findById(req.params.reviewId)

    if (!review.owner.equals(req.session.user._id)) {
        return res.send("You don't have permission to do that")
    }

    await Review.findByIdAndDelete(req.params.reviewId)
    await Games.findByIdAndUpdate(req.params.gameId, {
        $pull: { gameReviews: req.params.reviewId }
    })
    res.redirect(`/games/${req.params.gameId}`)
})

module.exports = router