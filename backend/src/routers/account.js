// const accountController = require('../controllers/account');
// const { deleteAccountById } = require('../controllers/account');
// const { tryCatch } = require('../middlewares/errorHandle');
// const Route = require('express').Router();

// Route.get('/', tryCatch(accountController.getAllAccount));
// Route.get('/:id', tryCatch(accountController.getAccountById));
// Route.post('/', tryCatch(accountController.createAccount));
// Route.put('/:id', tryCatch(accountController.updateAccountById));
// Route.delete('/:id', tryCatch(accountController.deleteAccountById));

// module.exports = Route;

const R = require('express').Router();

R.post('/',(req,res,next)=>{
    const newAccount = {
        username: req.body.username,
        password: req.body.password
    }
const result = accountController.creat(newAccount);
res.send(result);
})

module.exports = R;