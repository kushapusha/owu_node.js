const db = require('../../database').getInstance();

module.exports = async (id) => {
    const HoseModel = db.getModel('House');

    await HoseModel.destroy({where: {id}});
};