const router =  require('express').Router();

const { JWT_DIFF_EXPIRATION_THRESHOLD } = require('./../constant');

const jwt = require('./../service/jwt');
const cookie = require('./../service/cookie');

router.get('/refresh', (req, res) => {
    const nowUnixSeconds = Math.round(Number(new Date()) / 1000);

    if (res.locals.payload.exp - nowUnixSeconds > JWT_DIFF_EXPIRATION_THRESHOLD) {
      return res.status(400).end();
    }
  
    const token = jwt.sign(res.locals.payload.user);

    cookie.setToken(res, token);

    res.status(200).json({ 'message': 'Token updated' }).end();
});

module.exports = router;
