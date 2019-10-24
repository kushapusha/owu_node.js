const {houseService} = require('../../service');
const {notEmptyDataValidator} = require('../../validator');

module.exports = async (req, res) => {
    try {
        const houses = await houseService.findAllHousesService();

        notEmptyDataValidator(houses);

        res.json(houses);
    } catch (e) {
        res.status(400).json(e.message)
    }
};