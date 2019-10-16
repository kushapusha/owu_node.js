const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const ThisUser = await userService.isUserPresentService(id);

        if (!ThisUser) {
            return res.redirect('/users_register');
        }

        req.user = ThisUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};