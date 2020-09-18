const router = require('express').Router()
const connectionController = require('../controllers/connection.controller')

router.get('/new',connectionController.createConnection)

router.post('/join',connectionController.joinByCode)

router.post('/disconnect',connectionController.disconnect)

module.exports = router