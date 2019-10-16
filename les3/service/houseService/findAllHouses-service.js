const  db = require('../../database').getInstance();

module.exports = async () => {
    const HouseModel = db.getModel('House');

    const AllHouses = await HouseModel.findAll();

    return AllHouses;
};