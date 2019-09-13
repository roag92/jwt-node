const { COOKIE_NAME, JWT_EXPIRES_IN_SECONDS } = require('./../constant');

const setToken = (res, token) => {
    res.cookie(COOKIE_NAME, token, { maxAge: JWT_EXPIRES_IN_SECONDS * 1000 });
};

module.exports = { setToken };
