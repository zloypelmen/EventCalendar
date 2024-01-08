const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')

router.post('/:userId',eventController.createEventByUserId)
router.get('/:userId',eventController.getAllEventsByUserId)
router.delete('/:userId',eventController.deleteAllEventsByUserId)

module.exports = router