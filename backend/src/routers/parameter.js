const Route = require('express').Router();
const parameterController = require('../controllers/parameter')

const {tryCatch} = require('../middlewares/errorHandle')

Route.get('/list-category',
  tryCatch(parameterController.listCategory));

Route.get('/list-product',
  tryCatch(parameterController.listProduct));
  
Route.get('/list-order',
  tryCatch(parameterController.listOrder));

module.exports = Route;