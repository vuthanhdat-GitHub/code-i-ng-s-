const orderController = require('../controllers/order');
const { deleteOrderById } = require('../controllers/order');
const { tryCatch } = require('../middlewares/errorHandle');
const Route = require('express').Router();

Route.get('/', tryCatch(orderController.getAllOrder));
Route.get('/:id', tryCatch(orderController.getOrderById));
Route.post('/', tryCatch(orderController.createOrder));
Route.put('/:id', tryCatch(orderController.updateOrderById));
Route.delete('/:id', tryCatch(orderController.deleteOrderById));

module.exports = Route;