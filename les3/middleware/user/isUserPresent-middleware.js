const {userService} = require('../../service');
const {notEmptyDataValidator} = require('../../validator');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const ThisUser = await userService.isUserPresentService(id);

        notEmptyDataValidator(ThisUser);

        req.user = ThisUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};