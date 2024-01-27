const { Router } = require('express');
const router = new Router();
const actionController = require('../controllers/actionController');

router.post('/add', actionController.add);

router.get('/get-all', actionController.getAll);

router.get('/get-by-id/:id', actionController.getById);

router.delete('/del/:id', actionController.remove);


module.exports = router;