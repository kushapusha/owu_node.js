const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const AllUsers = await userService.findAllUsersService();

        if (!AllUsers.length) {
            return res.redirect('/users_register');
        }

        req.user = AllUsers;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};