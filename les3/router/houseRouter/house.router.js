const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware, accessChecking } = require('../../middleware');

router.post('/', house.createHouse);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getByID);
router.get('/', houseMiddleware.findAllHousesMiddleware,house.findAll);
router.patch('/:id',
    accessChecking.chekAccessTokenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.updateHouse);
router.delete('/:id',
    accessChecking.chekAccessTokenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.deleteHouse);

module.exports = router;