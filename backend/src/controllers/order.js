const productServices = require('../services/order')

const getAllOrder = async (req, res) => {
    try {
        const data = await orderService.getAllOrder()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await orderService.getOrderById(id)
        res.send({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log(err);
    }
}
const createOrder = async (req, res) => {
    try {
        const { data } = await order.createOrder(req.body);
        res.send('Order new')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const updateOrderById = async (req, res) => {
    try {
        const { data } = await order.updateOrderById(req.params.id, req.body);
        res.send('Order updated')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const deleteOrderById = async (req, res) => {
    try {
        const { data } = await account.deleteOrderById(req.params.id);
        res.send('Order deleted ')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
}