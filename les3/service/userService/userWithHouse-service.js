const db = require('../../database').getInstance();

module.exports = async id => {
    const HouseModel = await db.getModel('House');

    const houses = await HouseModel.findAll({
        where: {users_id: id}
    });

    return houses;
};