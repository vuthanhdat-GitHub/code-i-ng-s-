const productServices = require('../services/product')

const getAllProduct = async (req, res) => {
    try {
        const data = await productService.getAllProduct()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await productService.getProductById(id)
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
        const newProduct = {
            productId: req.body.productId,
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.creatCategory(newProduct)
        res.send("Product new")
    } catch (err) {
        console.log(err)
    }
}
const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateProcduct = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.updateCategorybyId(updateProcduct, id)
        res.send('Update data')
    } catch (err) {
        console.log(err)
    }
}
const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.deleteProductbyId(deletedProduct, id)
        res.send({
            status: 'Delete'
        })
    } catch (err) {
        console.log(err);
    }
}
const getAllProductId = async (req, res) => {
    console.log(req.pagination);
    const { data, metadata } = await categoryServices.getAllProductId()
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