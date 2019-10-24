const {authService} = require('../../service');
const {notEmptyDataValidator} = require('../../validator');

module.exports = async (req, res) => {
    try {
        const {city} = req.body;

        const houses = await authService.findHouseLogService(city);

        notEmptyDataValidator(houses);

        res.json(houses);
    } catch (e) {
        res.status(400).json(e.message)
    }

};