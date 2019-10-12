const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const HouseModel = db.getModel('House');

        const AllHouses = await HouseModel.findAll();

        if (!AllHouses.length) {
            return res.redirect('/houses_register');
        }

        req.house = AllHouses;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};