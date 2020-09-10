const productService = require('../services/product')
const product = require('../services/product')

const getAllProduct = async (req, res) => {
    try {
        const {data, metadata} = await productService.getAllProduct(req.pagination)
        res.send({
            status: 1,
            data,
            metadata
        });
    } catch (err) {
        console.log(err)
    }
}
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await productService.getProductbyId(parseInt(id))
        res.send({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log(err);
    }
}
const createProduct = async (req, res) => {
    try {
        const { data } = await product.createProduct(req.body);
        res.send(' Product new ');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const updateProductById = async (req, res) => {
    try {
        const { data } = await product.updateProductById(parseInt(req.params.id), req.body)
        res.send('Update Product');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const deleteProductById = async (req, res) => {
    try {
        const { data } = await product.deleteProductById(parseInt(req.params.id));
        res.send('delete');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const getAllProductId = async (req, res)=>{
    console.log(req.pagination);
    const { data, metadata} = await productServices.getAllProductId()
    res.send({
        status: 1,
        data,
        metadata,
    })
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
    getAllProductId
}