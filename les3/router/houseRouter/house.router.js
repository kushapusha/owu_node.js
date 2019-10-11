const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware } = require('../../middleware');

router.post('/', house.createHouse);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getByID);
router.get('/', houseMiddleware.findAllHousesMiddleware,house.findAll);
router.post('/update', houseMiddleware.isHouseIdInDbPresentMiddleware, house.updateHouse);

module.exports = router;