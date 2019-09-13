const COOKIE_NAME = 'token';
const JWT_ALGORITHM = 'HS256';
const JWT_SECRET_KEY = 'jwt_secret_key';
const JWT_EXPIRES_IN_SECONDS = 900;
const JWT_DIFF_EXPIRATION_THRESHOLD = 60;
const URI_WHITELIST = [
    '/login',
];

module.exports = {
    COOKIE_NAME,
    JWT_ALGORITHM,
    JWT_SECRET_KEY,
    JWT_EXPIRES_IN_SECONDS,
    JWT_DIFF_EXPIRATION_THRESHOLD,
    URI_WHITELIST,
};
