const CategoryService = require('../services/category')
const ProductService = require('../services/product')
const AccountService = require('../services/account')
const OrderService = require('../services/order')

const listCategory = async (req, res) => {
    const { data, metadata } = await CategoryService.listCategory()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const listProduct = async (req, res) => {
    const { data, metadata } = await ProductService.listProduct()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const listAccount = async (req, res) => {
    const { data, metadata } = await AccountService.listAccount()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const listOrder = async (req, res) => {
    const { data, metadata } = await OrderService.listOrder()
    res.send({
        status: 1,
        metadata,
        data
    })
}

module.exports = {
    listCategory,
    listProduct,
    listAccount,
    listOrder
}