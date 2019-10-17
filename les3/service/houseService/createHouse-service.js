const db = require('../../database').getInstance();

module.exports = async (city, street, rooms, id) => {
    const HouseModel = db.getModel('House');

    await HouseModel.create({city, street, rooms, users_id: id});
};