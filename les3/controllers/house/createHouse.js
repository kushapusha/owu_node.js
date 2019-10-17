const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {city, street, rooms} = req.body;
        const {id} = req.user;

        await houseService.createHouseService(city, street, rooms, id);

        res.json('House was created');
    } catch (e) {
        res.status(400).json(e.message)
    }
};