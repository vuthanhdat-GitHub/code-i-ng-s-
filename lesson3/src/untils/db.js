const mysql = require('mysql')

const config = {
    host: 'codedidungso.me',
    port: 3306,
    user: 'root',
    password: 'Codese2020',
    database: 'shopese'
}

const pool = mysql.createPool(config)

module.exports = pool