const db = require('../../database').getInstance();

module.exports = async (street) => {
    const HouseModel = db.getModel('House');

    const LoginHouse = await HouseModel.findOne({
        where: {street}
    });

    return LoginHouse;
};