const {houseService} = require('../../service');
const {IdEqualityValidator} = require('../../validator');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const {users_id} = req.house;
        const {id: token_id} = req.user;

        IdEqualityValidator(users_id, token_id);

        await houseService.deleteHouseService({id});

        res.json('House was deleted');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

