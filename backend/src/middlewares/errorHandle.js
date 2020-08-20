const errorHandle = (err, req, res, next) => {
    console.log(err);
    res.status(401)
    res.send('error')
}

const tryCatch = (f) => async (req, res, next) => {
    try {
        await f(req, res)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    errorHandle,
    tryCatch
}