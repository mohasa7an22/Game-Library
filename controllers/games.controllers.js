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
            platfrom: req.body.platfrom,
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
    const allGames = await Games.find()
    res.render('games/all-games.ejs', { games: allGames })
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



router.delete('/:id', isSignedIn, async (req, res) => {
    await Games.findByIdAndDelete(req.params.id)
    res.redirect('/games')
})




router.get('/:id/edit', isSignedIn, async (req, res) => {
    const foundGames = await Games.findById(req.params.id)
    res.render('games/edit-game.ejs', { game: foundGames })
})


router.put('/:id', isSignedIn, async (req, res,) => {
    const updatedGame = await Games.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/games')
})

module.exports = router