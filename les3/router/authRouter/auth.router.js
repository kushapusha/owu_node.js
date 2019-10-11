const router = require('express').Router();

const { house, user } = require('../../controllers');
const { houseMiddleware, userMiddleware } = require('../../middleware');

router.post('/houses', houseMiddleware.findHouseLogMiddleware, house.loginHouse);
router.post('/users', userMiddleware.findUserLogMiddleware, user.loginUser);

module.exports = router;