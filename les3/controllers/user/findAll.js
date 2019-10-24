const {userService} = require('../../service');
const {notEmptyDataValidator} = require('../../validator');

module.exports = async (req, res) => {
    try {
        const users = await userService.findAllUsersService();

        notEmptyDataValidator(users);

        res.json(users)
    } catch (e) {
        res.status(400).json(e.message)
    }
};