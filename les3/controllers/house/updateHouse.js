const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const HouseNew = req.body;
        const {users_id} = req.house;
        const {id: token_id} = req.user;

        if (+users_id !== token_id) {
            throw new Error('It is not your house')
        }

        await houseService.updateHouseService({id}, HouseNew);

        res.json('House was updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};