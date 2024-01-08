const { Event, User } = require('../models/models')
const  { ApiError } =require('../error/ApiError')

const eventController = {
    getAllEventsByUserId: async (req, res) => {
        try {
            const userId = req.params.UserId;

            const user = await User.findByPk(userId, {
                include: Event,
            });

            const events = user.Event;
            return res.json(events);
        } catch (error) {
            console.error(error);
            if (error instanceof ApiError) {
                return res.status(error.status).json({ error: error.message });
            }
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    },

    deleteAllEventsByUserId: async (req, res) => {
        try {
            const userId = req.params.UserId;

            await Event.destroy({
                where: {
                    UserId: userId,
                },
            });

            res.json({ message: 'Все события пользователя удалены' });
        } catch (error) {
            console.error(error);
            if (error instanceof ApiError) {
                return res.status(error.status).json({ error: error.message });
            }
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    },

    createEventByUserId: async (req, res) => {
        try {
            const userId = req.params.UserId;

            const { title, description, label, day } = req.body;
            const newEvent = await Event.create({
                title,
                description,
                label,
                day,
                UserId: userId,
            });

            res.json(newEvent);
        } catch (error) {
            console.error(error);
            if (error instanceof ApiError) {
                return res.status(error.status).json({ error: error.message });
            }
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    },
};

module.exports = eventController;