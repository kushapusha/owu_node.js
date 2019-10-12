const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const HouseToCreate = req.body;
        const HouseModel = db.getModel('House');

        await HouseModel.create(HouseToCreate);

        res.render('house');
    } catch (e) {
        res.status(400).json(e.message)
    }
};