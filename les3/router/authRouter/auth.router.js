const router = require('express').Router();

const {auth} = require('../../controllers');

router.post('/houses', auth.loginHouse);
router.post('/users', auth.loginUser);

module.exports = router;