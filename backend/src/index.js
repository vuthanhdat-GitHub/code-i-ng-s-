const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const pagination = require('./middlewares/pagination')

const app = express()

app.use(bodyParser.json())
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', 
  path: path.join(__dirname, 'log')
})
app.use(morgan('combined', { stream: accessLogStream }))
app.use(pagination)
app.use((req, res, next) => {
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ',req.query);
  next();
})

const parameterRouter = require('./routers/parameter')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
// const accountRouter = require('./routers/account')

app.use('/api/v1/parameter', parameterRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/order', orderRouter);
// app.use('/api/v1/account', accountRouter);

app.get('/api/v1/test-err', (req, res, next) => {
  next('err')
})
app.get('/api/v1/test-err2', (req, res, next) => {
  throw Error('err')
})

const {errorHandle} = require('./middlewares/errorHandle')
app.use(errorHandle); 

app.listen(8080, err => {
    if (err) console.log(err);
    console.log("Running at port 8080");
});



// const express = require('express')
// const { createPool } = require('mysql')
// const pool = require('./untils/db')
// const app = express()

// const bodyparser = require('body-parser')

// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({ extended: true }))


// const callback = () => {
//     console.log("Running at 8080");
// }

// const categoryRouter = require('./router/category');

// app.use('/api/v1/category', categoryRouter);

// app.get('/', (_req, res) => {
//     const data = {
//         username: 'thien',
//         password: 'thienagain'
//     }
//     res.send(data)
// })
// app.get('/', (_req, res) => {
//     pool.query('select * from `user`;'), (err, data) => {
//         if (err) res.send('error query')
//         console.log('error');
//         console.log(data);
//         res.send(data)
//     }
// }
// )

// const {errorHandle}= require('./middlewares/errorHandle')
// app.use(errorHandle);

// app.listen(8080, callback)



