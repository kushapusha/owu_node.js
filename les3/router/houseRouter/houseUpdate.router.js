const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware } = require('../../middleware');

router.post('/', houseMiddleware.isHouseIdInDbPresentMiddleware, house.updateHouse);

module.exports = router;