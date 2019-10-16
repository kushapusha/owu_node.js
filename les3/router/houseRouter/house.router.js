const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware } = require('../../middleware');

router.post('/', house.createHouse);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getByID);
router.get('/', houseMiddleware.findAllHousesMiddleware,house.findAll);
router.patch('/:id', houseMiddleware.isHouseIdInDbPresentMiddleware, house.updateHouse);
router.delete('/:id', house.deleteHouse);

module.exports = router;