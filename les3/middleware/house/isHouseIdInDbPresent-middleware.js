const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const HouseID = await houseService.isHousePresentService(id);

        if (!HouseID) {
            throw new Error('No house with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};