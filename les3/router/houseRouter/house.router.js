const router = require('express').Router();

const { house } = require('../../controllers');
const { houseMiddleware, accessChecking, filesMiddleware } = require('../../middleware');

router.post('/',
    accessChecking.chekAccessTokenMiddleware,
    filesMiddleware.checkPhotoMiddleware,
    house.createHouse);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getByID);
router.get('/', house.findAll);
router.patch('/:id',
    accessChecking.chekAccessTokenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.updateHouse);
router.delete('/:id',
    accessChecking.chekAccessTokenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.deleteHouse);

module.exports = router;