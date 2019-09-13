const jwt = require('jsonwebtoken');

const { JWT_ALGORITHM, JWT_SECRET_KEY, JWT_EXPIRES_IN_SECONDS } = require('./../constant');

const sign = (user) => {
    return jwt.sign({ user }, JWT_SECRET_KEY, {
        algorithm: JWT_ALGORITHM,
        expiresIn: JWT_EXPIRES_IN_SECONDS
    });
};

module.exports = { sign };
