const {userService} = require('../../service');
const {IdEqualityValidator} = require('../../validator');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const UserNew = req.body;
        const {id: token_id} = req.user;

        IdEqualityValidator(id, token_id);

        await userService.updateUserService(UserNew, id);

        res.json('User was updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};


