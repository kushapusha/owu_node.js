const router = require('express').Router();

const { user } = require('../../controllers');
const { userMiddleware, accessChecking } = require('../../middleware');

router.post('/', user.createUser);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getByID);
router.get('/', userMiddleware.findAllUsersMiddleware ,user.findAll);
router.patch('/:id',
    userMiddleware.isUserPresentMiddleware,
    accessChecking.chekAccessTokenMiddleware,
    user.updateUser);
router.delete('/:id',
    userMiddleware.isUserPresentMiddleware,
    accessChecking.chekAccessTokenMiddleware,
    user.deleteUser);
router.get('/:id/houses', user.getUserWHouseById);

module.exports = router;