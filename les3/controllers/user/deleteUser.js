const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;

        await userService.deleteUserService(id);

        res.json('User was deleted');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

