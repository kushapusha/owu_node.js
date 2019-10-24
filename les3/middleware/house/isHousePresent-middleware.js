const {houseService} = require('../../service');
const {notEmptyDataValidator} = require('../../validator');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const ThisHouse = await houseService.isHousePresentService(id);

        notEmptyDataValidator(ThisHouse);

        req.house = ThisHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};