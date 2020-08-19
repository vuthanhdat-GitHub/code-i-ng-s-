const orderController = require('../controllers/order');
const { deleteOrderById } = require('../controllers/order');
const Route = require('express').Router();

Route.get('/', orderController.getAllOreder);
Route.get('/:id', orderController.getOrderById);
Route.post('/', orderController.createOrder);
Route.put('/:id', orderController.updateOrderById);
Route.delete('/:id', deleteOrderById);

module.exports = Route;