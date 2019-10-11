const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware } = require('../../middleware');

router.post('/', houseMiddleware.findHouseLogMiddleware, house.loginHouse);

module.exports = router;