const router = require('express').Router();

const { auth } = require('../../controllers');
const { authMiddleware } = require('../../middleware');

router.post('/houses', authMiddleware.findHouseLogMiddleware, auth.loginHouse);
router.post('/users', authMiddleware.findUserLogMiddleware, auth.loginUser);

module.exports = router;