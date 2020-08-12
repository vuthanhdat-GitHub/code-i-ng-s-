const express = require('express');
const { request, response } = require('express');
const { createPool } = require('mysql');
const pool = require('./untils/db')
const app = express()

const categoryRouter
const callback = () => {
    console.log("Running at 8080");
}
app.get('/', (request, response) => {
    const data = {
        username: 'thien',
        password: 'thienagain'
    }
    response.send(data)
})
app.get('/', (request, response) => {
    pool.query('select * from `user`;'), (err, data) => {
        if (err) response.send('error query')
        console.log('error');
        console.log(data);
        response.send(data)
    }
}
)
app.listen(8080, callback)



