const accountService = require('../services/account')

const getAllAccount = async (req, res) => {
    try {
        const {data, metadata} = await accountService.getAllAccount(req.pagination)
        res.send({
            status: 1,
            data,
            metadata
        });
    } catch (err) {
        console.log(err)
    }
}
const getAccountById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await accountService.getAccountById(id)
        res.send({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log(err);
    }
}
const createAccount = async (req, res) => {
    try {
        const { data } = await account.createAccount(req.body);
        res.send('Account new')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const updateAccountById = async (req, res) => {
    try {
        const { data } = await account.updateAccountById(parsentInt(req.params.id), req.body);
        res.send('Account updated')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
const deleteAccountById = async (req, res) => {
    try {
        const { data } = await account.deleteAccountById(req.params.id);
        res.send('Account deleted ')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    getAllAccount,
    getAccountById,
    createAccount,
    updateAccountById,
    deleteAccountById
}