const router = require('express').Router();

const { user } = require('../../controllers');
const { userMiddleware } = require('../../middleware');

router.post('/', userMiddleware.isIDinDbPresentMiddleware, user.updateUser);

module.exports = router;