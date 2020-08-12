const getAllCategory = (req, res) => {
  pool.query('select * from `category` ;', (err, data) => {
    if (err) {
        console.log(err);
        res.send('Error Query')
    }
    console.log(data);
    res.send(data)
})
  }
  const getCategoryById = (req, res) => {
    Category.getCategoryById(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving category with id " + req.params.categoryId
                });
            }
        } else res.send(data);
    })
  }
  const createCategory = (req, res) => {
    res.send('create')
  }
  const updateCategoryById = (req, res) => {
    res.send('update')
  }
  const deleteCategoryById = (req, res) => {
    Category.deleteCategoryById(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete category with id " + req.params.categoryId
                });
            }
        } else res.send({ message: `Category was deleted successfully!` });
    })
  }
  
  module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
  }