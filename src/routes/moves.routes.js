const router = require('express').Router()
const movesController = require('../controllers/moves.controller')

router.post('/move', movesController.makeAMove)

router.get('/restart/:connectionCode',movesController.cleanBoard)

router.post('/askNewGame', movesController.askRestart)

router.post('/asknewMark', movesController.askMarkChange)

module.exports = router