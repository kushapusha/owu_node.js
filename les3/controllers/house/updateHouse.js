const {houseService} = require('../../service');
const {IdEqualityValidator} = require('../../validator');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const HouseNew = req.body;
        const {users_id} = req.house;
        const {id: token_id} = req.user;

        IdEqualityValidator(users_id, token_id);

        await houseService.updateHouseService(HouseNew, id);

        res.json('House was updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};