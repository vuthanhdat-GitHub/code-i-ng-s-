const categoryServices = require('../services/category')

const getAllCategory = async (req, res) => {
    try {
        const data = await categoryService.getAllcategory()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await categoryService.getCategorybyId(id)
        res.send({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log(err);
    }
}
const createCategory = async (req, res) => {
    try {
        const newCategory = {
            categoryId: req.body.categoryId,
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.creatCategory(newCategory)
        res.send("Category new")
    } catch (err) {
        console.log(err)
    }
}
const updateCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateCategory = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.updateCategorybyId(updateCategory, id)
        res.send('Update data')
    } catch (err) {
        console.log(err)
    }
}
const deleteCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        const data = await categoryService.deleteCategorybyId(deletedCategory, id)
        res.send({
            status: 'Delete'
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}