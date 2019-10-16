const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const UserNew = req.body;
        const {id_token} = req.user;

        if (+id !== id_token) {
            throw new Error('It is not your user')
        }

        await userService.updateUserService(id, UserNew);

        res.json('User was updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};


