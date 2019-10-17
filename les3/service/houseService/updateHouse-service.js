const db = require('../../database').getInstance();

module.exports = async (HouseNew, id) => {
    const HouseModel = db.getModel('House');

    await HouseModel.update(HouseNew,
        {where: {id}}
    );
};