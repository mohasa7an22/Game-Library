const router = require("express").Router()
const Games = require('../models/games')
// const User = require('../models/User')
const Review = require('../models/reviews')
const isSignedIn = require("../middleware/is-signed-in")


// Create routes
router.get('/new', (req, res) => {
    res.render('games/game-create.ejs')
})

router.post('/', isSignedIn, async (req, res) => {
    try {
        const createdGame = await Games.create({
            name: req.body.name,
            genre: req.body.genre,
            image: req.body.image,
            platform: req.body.platform,
            status: req.body.status,
            owner: req.session.user._id
        })
        res.redirect('/games')
    } catch (err) {
        res.send('ERROR CREATING GAME')
    }

})


// Read Routes

router.get('/', async (req, res) => {
    const allGames = await Games.find().populate('owner')
    const gamesByOwner = {}
    for (let game of allGames) {
        const ownerName = game.owner.username
        if (!gamesByOwner[ownerName]) {
            gamesByOwner[ownerName] = []
        }
        gamesByOwner[ownerName].push(game)
    }
    res.render('games/all-games.ejs', { gamesByOwner })
})


router.get('/:id', async (req, res) => {
    const foundGame = await Games.findById(req.params.id)
        .populate('owner')
        .populate({
            path: 'gameReviews',
            populate: { path: 'owner' }
        })
    res.render('games/game-details.ejs', { game: foundGame })
})

// new commit

router.delete('/:id', isSignedIn, async (req, res) => {
    const foundGame = await Games.findById(req.params.id)

    if (!foundGame.owner.equals(req.session.user._id)) {
        return res.redirect('/games')
    }

    await Games.findByIdAndDelete(req.params.id)
    res.redirect('/games')
})




router.get('/:id/edit', isSignedIn, async (req, res) => {
    const foundGame = await Games.findById(req.params.id)

    if (!foundGame.owner.equals(req.session.user._id)) {
        return res.redirect('/games')
    }

    res.render('games/edit-game.ejs', { game: foundGame })
})


router.put('/:id', isSignedIn, async (req, res) => {
    const foundGame = await Games.findById(req.params.id)

    if (!foundGame.owner.equals(req.session.user._id)) {
        return res.redirect('/games')
    }

    const updatedGame = await Games.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/games')
})
module.exports = router