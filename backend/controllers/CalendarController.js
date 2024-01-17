const {Event, ChangeLog} = require("../models/models")
const {badRequest} = require("../error/ApiError");
const ApiError = require("../error/ApiError");

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

    async addCE(req, res, next) {
        const { title, description, label, day, userId } = req.body;
        if (!title || !description || !label || !userId) {
            return next(ApiError.badRequest('Некоторых полей нет'))
        }
        try {
            const newCalendarEvent = await Event.create({title, description, label, day, userId})
            res.json(newCalendarEvent);
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }

    async remove(req, res, next) {
        const id = req.params.id;

        try {
            const event = await Event.findByPk(id);

            if (!event) {
                return next(badRequest('Запись не найдено'))
            }

            await event.destroy();

            res.json({ message: 'Запись успешно удалено' });
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }
}

module.exports = new CalendarController()