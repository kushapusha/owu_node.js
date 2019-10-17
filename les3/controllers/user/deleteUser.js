const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const {id: token_id} = req.user;

        if (+id !== token_id) {
            throw new Error('It is not your user')
        }

        await userService.deleteUserService(id);

        res.json('User was deleted');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

