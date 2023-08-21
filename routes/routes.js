const express = require('express');
const itemsControllers = require('../controllers/controller')

const router = express.Router();

router.get('/get_all', itemsControllers.getItems);

router.get('/:id', itemsControllers.getItemsById);

router.post('/', itemsControllers.postItem);

router.post('/:id', itemsControllers.editItem);

router.post('/add/:id', itemsControllers.addQuantity);

router.post('/sub/:id', itemsControllers.subQuantity);

router.delete('/:id', itemsControllers.deleteItem);


module.exports = router;