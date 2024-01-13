const { Router } = require('express');
const router = new Router();
const changeController = require('../controllers/changeController');

router.post('/add', changeController.add);

router.get('/get-all', changeController.getAll);

router.get('/:id', changeController.getById);

module.exports = router;