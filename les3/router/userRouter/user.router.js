const router = require('express').Router();

const { user } = require('../../controllers');
const { userMiddleware, accessChecking, filesMiddleware } = require('../../middleware');

router.post('/',
    filesMiddleware.checkPhotoMiddleware,
    filesMiddleware.checkUserPhotosQuantityMiddleware,
    user.createUser);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getByID);
router.get('/', userMiddleware.findAllUsersMiddleware ,user.findAll);
router.patch('/:id',
    accessChecking.chekAccessTokenMiddleware,
    user.updateUser);
router.delete('/:id',
    accessChecking.chekAccessTokenMiddleware,
    user.deleteUser);
router.get('/:id/houses', user.getUserWHouseById);

module.exports = router;