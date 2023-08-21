const express = require('express');
const itemsControllers = require('../controllers/controller')

const router = express.Router();

router.get('/get_all', itemsControllers.getItems);

router.get('/:id', itemsControllers.getItemsById);

router.post('/', itemsControllers.postItem);

router.post('/:id', itemsControllers.editItem);

router.delete('/:id', itemsControllers.deleteItem);


module.exports = router;