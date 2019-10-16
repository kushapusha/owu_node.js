const  db = require('../../database').getInstance();

module.exports = async id => {
    const UserModel = await db.getModel('User');

    const ThisUser = await UserModel.findByPk(id, {
        attributes: ['id', 'name']
    });

    return ThisUser && ThisUser.dataValues;
};