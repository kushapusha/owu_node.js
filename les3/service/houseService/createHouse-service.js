const db = require('../../database').getInstance();

module.exports = async (HouseToCreate) => {
    const HouseModel = db.getModel('House');

    await HouseModel.create(HouseToCreate);
};