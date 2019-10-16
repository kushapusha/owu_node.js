const {userService} = require('../../service');

module.exports = async (req, res ,next) => {
    try {
        const {email, password} = req.body;

        const LoginUser = await userService.findUserLogService(email, password);

        if (!LoginUser.length) {
            return res.redirect('/users_register');
        }

        req.user = LoginUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};