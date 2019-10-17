const db = require('../../database').getInstance();

module.exports = async (id, HouseNew) => {
    const HouseModel = db.getModel('House');

    await HouseModel.update(HouseNew,
        {where: id}
    );
};