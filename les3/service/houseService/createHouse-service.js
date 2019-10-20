const db = require('../../database').getInstance();

module.exports = async HouseNew => {
    const HouseModel = db.getModel('House');

    const  house = await HouseModel.create(HouseNew);

    return house && house.dataValues;
};