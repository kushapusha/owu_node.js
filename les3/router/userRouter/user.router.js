const router = require('express').Router();

const { user } = require('../../controllers');
const { userMiddleware } = require('../../middleware');

router.post('/', user.createUser);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getByID);
router.get('/', userMiddleware.findAllUsersMiddleware ,user.findAll);
router.patch('/:id', userMiddleware.isIDinDbPresentMiddleware, user.updateUser);

module.exports = router;