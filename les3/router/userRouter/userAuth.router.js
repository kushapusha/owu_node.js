const router = require('express').Router();

const { user } = require('../../controllers');
const { userMiddleware } = require('../../middleware');

router.post('/', userMiddleware.findUserLogMiddleware, user.loginUser);

module.exports = router;