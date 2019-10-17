const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const HouseToCreate = req.body;

        await houseService.createHouseService(HouseToCreate);

        res.render('house');
    } catch (e) {
        res.status(400).json(e.message)
    }
};