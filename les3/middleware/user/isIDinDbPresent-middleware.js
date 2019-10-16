const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const UserID = await userService.isUserPresentService(id);

        if (!UserID) {
            throw new Error('No user with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};