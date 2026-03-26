const allowedOrigin = require('../config/allowedOrigin');

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigin.includes(origin)) {
        res.headers('Access-Control-Allow-Ceredentials', true)
    }
    next();
}

module.exports = credentials ;