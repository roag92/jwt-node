const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY, URI_WHITELIST } = require('./../constant');

module.exports = (req, res, next) => {
    res.locals.payload = null;

    if (URI_WHITELIST.indexOf(req.path) !== -1) {
        return next();
    }

    const token = req.cookies.token

    if (!token) {
        return res.status(401).end();
    }

    try {
        res.locals.payload = jwt.verify(token, JWT_SECRET_KEY);

        next();
    } catch (exception) {
        if (exception instanceof jwt.JsonWebTokenError) {
            return res.status(401).end()
        }
       
        return res.status(400).end()
    }
};
