const db = require('../untils/db')

const getAllCategory = async () => {
    const sql = `SELECT * FROM category;`;
    const data = await db.queryMulti(sql);
    return data;
}

const getCategoryById = async (id) => {
    const sql = `SELECT * FROM category WHERE categoryId = ? ;`;
    const data = await db.queryOne(sql, [id])
    return data
}

const creatCategory = async (newCategory) => {
    const sql = `insert into category set ?;`
    const data = db.query(sql, newCategory)
    return data
}
const updateCategorybyId = async (updateCategory, id) => {
    const sql = `update category set ? where categoryId = ?`
    const data = db.query(sql, [updateCategory, id])

}
const deleteCategorybyId = async (deletedCategory, id) => {
    const sql = `update category set ? where categoryId = ?`
    const data = db.query(sql, [deletedCategory, id])
}

module.exports = {
    getAllCategory,
    getCategoryById,
    creatCategory,
    updateCategorybyId,
    deleteCategorybyId
}


// const db = require('../untils/db')
// const category = require('../controllers/category')

// const getAllCategory = (req, res) => {
//     db.query(`SELECT * FROM category;`, (err, result) => {
//         if (err) {
//             console.log(err);
//             res.send({
//                 status: -1,
//                 message: "Can not get all Category"
//             })
//         } else {
//             res.send({
//                 status: 1,
//                 data: result,
//             })
//         }
//     })
// }
// module.exports = {
//     getAllCategory,
// };