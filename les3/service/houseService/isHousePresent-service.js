const  db = require('../../database').getInstance();

module.exports = async id => {
    const HouseModel = db.getModel('House');

    const ThisHouse = await HouseModel.findByPk(id);

    return ThisHouse;
};