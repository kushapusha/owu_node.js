const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    const {id, city, street, rooms} = req.body;
    const HouseModel = db.getModel('House');

    await HouseModel.update(
        {city: `${city}`,
        street: `${street}`,
        rooms: `${rooms}`},
        {where: {
            id: id}
        }
    );

    res.redirect('/houses_update');
};