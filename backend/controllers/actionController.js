const { Action } = require('../models/models');

class ActionController {
    async add(req, res, next) {
        try {
            const { title, description, label, day, location, author, eventDate } = req.body;
            const newAction = await Action.create({
                title,
                description,
                label,
                day,
                location,
                author,
                eventDate,
            });
            res.status(201).json(newAction);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const actions = await Action.findAll();
            res.status(200).json(actions);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const actionId = req.params.id;
            const action = await Action.findByPk(actionId);

            if (!action) {
                res.status(404).json({ message: 'Action not found' });
            } else {
                res.status(200).json(action);
            }
        } catch (error) {
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const actionId = req.params.id;
            const action = await Action.findByPk(actionId);

            if (!action) {
                res.status(404).json({ message: 'Action not found' });
            } else {
                await action.destroy();
                res.status(204).send();
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ActionController();