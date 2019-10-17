const db = require('../../database').getInstance();

module.exports = async HouseNew => {
    const HouseModel = db.getModel('House');

    await HouseModel.create(HouseNew);
};