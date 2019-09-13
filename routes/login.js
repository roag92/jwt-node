const router =  require('express').Router();

const jwt = require('./../service/jwt');
const cookie = require('./../service/cookie');

router.post('/login', (req, res) => {
    const { user, pass } = req.body;

    if (user !== 'root' && pass !== 'toor') {
        return res.status(401).json({ error: 'Invalid credentials'}).end();
    }

    const token = jwt.sign(user);

    cookie.setToken(res, token);

    res.status(200).json({ 'message': 'Authentication completed' }).end();
});

module.exports = router;
