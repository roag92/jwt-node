const router =  require('express').Router();

router.get('/home', (req, res) => {
    return res.json({ user: res.locals.payload.user }).end();
});

module.exports = router;
