const db = require('../../database').getInstance();

module.exports = async (city) => {
    const HouseModel = db.getModel('House');

    const LoginHouse = await HouseModel.findAll({
        where: {city}
    });

    return LoginHouse;
};