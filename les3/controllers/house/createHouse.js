const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const HouseNew = req.body;
        const {id} = req.user;

        Object.assign(HouseNew, {users_id: id});

        await houseService.createHouseService(HouseNew);

        res.json('House was created');
    } catch (e) {
        res.status(400).json(e.message)
    }
};