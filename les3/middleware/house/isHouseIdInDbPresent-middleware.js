const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const HouseModel = db.getModel('House');

        let HouseID = await  HouseModel.findByPk(id);

        if (!HouseID) {
            throw new Error('No house with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};