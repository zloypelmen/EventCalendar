const {ChangeLog} = require("../models/models")
const {badRequest} = require("../error/ApiError");
const ApiError = require("../error/ApiError");

class ChangeController {

    async add(req, res, next) {
        const { title, description } = req.body;
        if (!title || !description) {
            return next(ApiError.badRequest('Некорректный title или description'))
        }
        try {
            const newChangeLog = await ChangeLog.create({title, description})
            res.json(newChangeLog);
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }

    async getAll(req, res, next) {
        try {
            const changeLogs = await ChangeLog.findAll();
            res.json(changeLogs);
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }

    async getById(req, res, next) {
        const changeId = req.params.id;

        try {
            const changeLog = await ChangeLog.findByPk(changeId);
            if (!changeLog) {
                return next(badRequest('Изменение не найдено'))
            }
            res.json(changeLog);
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }

    async remove(req, res, next) {
        const changeId = req.params.id;

        try {
            const changeLog = await ChangeLog.findByPk(changeId);

            if (!changeLog) {
                return next(badRequest('Запись не найдено'))
            }

            await changeLog.destroy();

            res.json({ message: 'Запись успешно удалено' });
        } catch (error) {
            console.error(error);
            return next(badRequest('Внутренняя ошибка сервера'))
        }
    }
}

module.exports = new ChangeController()