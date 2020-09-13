const account = require('../services/account');

const getAllAccount = async(req, res, next) => {
    const { data, metadata } = await account.getAll(req.pagination);
    res.send({
        data,
        metadata
    });
}

const getAllAccountById = async(req, res, next) => {
    const { data } = await account.getById(req.params.id);
    res.send(data);
}

const createAccount = async(req, res, next) => {
    const newAccount = {
        username: req.body.username,
        password: req.body.password,
    }
    if (!newAccount.username || !newAccount.password) {
        res.status(400).send({
            status: 0,
            message: 'Tên người dùng hoặc mật khẩu trống!'
        })
    }
    if (newAccount.password.length < 6) {
        res.status(400).send({
            status: 0,
            message: 'Mật khẩu phải có nhiều hơn 6 chữ số!'
        })
    }
    const data = await account.create(newAccount);
    if (data === "Tài khoản đã tồn tại!") {
        res.status(400).send({
            status: 0,
            message: 'Tài khoản đã tồn tại!'
        })
    }
    res.status(400).send({
        status: 1,
        message: 'Tạo tài khoản thành công'
    })
}

const updateAccountById = async(req, res) => {
    const { data } = await account.updateById(req.params.id, req.body);
    res.send('updated!');
}

const deleteAccountById = async(req, res) => {
    const { data } = await account.deleteById(req.params.id);
    res.send('deleted!')
}

module.exports = {
    getAllAccount,
    getAllAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById
}