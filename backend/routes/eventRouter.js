const Router = require('express')
const router = new Router()
const calendarController = require('../controllers/CalendarController')

router.get('/get-all',calendarController.getAll)
router.post('/add-ce',calendarController.addCE)

module.exports = router