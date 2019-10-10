const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    const HouseToCreate = req.body;
    const HouseModel = db.getModel('House');

    await HouseModel.create(HouseToCreate);

    res.render('house');
};