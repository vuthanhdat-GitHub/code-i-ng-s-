const express = require('express')
const { createPool } = require('mysql')
const pool = require('./untils/db')
const app = express()

const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))


const callback = () => {
    console.log("Running at 8080");
}

const categoryRouter = require('./router/category');

app.use('/api/v1/category', categoryRouter);

app.get('/', (_req, res) => {
    const data = {
        username: 'thien',
        password: 'thienagain'
    }
    res.send(data)
})
app.get('/', (_req, res) => {
    pool.query('select * from `user`;'), (err, data) => {
        if (err) res.send('error query')
        console.log('error');
        console.log(data);
        res.send(data)
    }
}
)
app.listen(8080, callback)



