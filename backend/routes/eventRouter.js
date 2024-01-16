const Router = require('express')
const router = new Router()
const calendarController = require('../controllers/CalendarController')

router.get('/get-all',calendarController.getAll)

module.exports = router