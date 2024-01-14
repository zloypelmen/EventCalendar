const { Router } = require('express');
const router = new Router();
const changeController = require('../controllers/changeController');

router.post('/add', changeController.add);

router.get('/get-all', changeController.getAll);

router.get('/get-by-id/:id', changeController.getById);

router.delete('/del/:id', changeController.remove);


module.exports = router;