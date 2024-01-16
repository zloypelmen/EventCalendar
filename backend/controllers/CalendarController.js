const {Event} = require("../models/models")
const {badRequest} = require("../error/ApiError");

class CalendarController {
    async getAll(req, res, next) {
        try {
            const calendarEvents = await Event.findAll();
            res.json(calendarEvents);
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }
}

module.exports = new CalendarController()