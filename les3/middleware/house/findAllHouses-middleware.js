const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const HouseModel = db.getModel('House');

        const AllHouses = await HouseModel.findAll();

        if (!AllHouses) {
            return res.redirect('/house');
        }

        req.house = AllHouses;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};