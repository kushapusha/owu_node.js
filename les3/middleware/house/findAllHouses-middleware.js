const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const AllHouses = await houseService.findAllHousesService();

        if (!AllHouses.length) {
            return res.redirect('/houses_register');
        }

        req.house = AllHouses;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};