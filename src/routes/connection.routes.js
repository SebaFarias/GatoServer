const router = require('express').Router()
const connectionController = require('../controllers/connection.controller')

router.post('/new',connectionController.createConnection)

router.get('/',connectionController.joinByCode)




exports.router = router