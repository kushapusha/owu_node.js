const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware } = require('../../middleware');

router.post('/', houseMiddleware.checkHouseValidMiddleware, house.createHouse);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getByID);
router.get('/', houseMiddleware.findAllHousesMiddleware,house.findAll);

module.exports = router;