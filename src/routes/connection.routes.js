const router = require('express').Router()
const connectionController = require('../controllers/connection.controller')

router.post('/new',connectionController.createConnection)

router.put('/join',connectionController.joinByCode)

router.put('/disconnect',connectionController.disconnect)




exports.router = router