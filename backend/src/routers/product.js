const productController = require('../controllers/product');
const { deleteProductById } = require('../controllers/product');
const { tryCatch } = require('../middlewares/errorHandle');
const Route = require('express').Router();

Route.get('/', tryCatch(productController.getAllProduct));
Route.get('/:id', tryCatch(productController.getProductById));
Route.post('/', tryCatch(productController.createProduct));
Route.put('/:id', tryCatch(productController.updateProductById));
Route.delete('/:id', tryCatch(productController.deleteProductById));

module.exports = Route;