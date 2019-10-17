const db = require('../../database').getInstance();

module.exports = async id => {
    const UserModel = db.getModel('User');

    await UserModel.destroy({where: {id}});
};