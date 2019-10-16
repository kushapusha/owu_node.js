const  db = require('../../database').getInstance();

module.exports = async id => {
    const UserModel = db.getModel('User');

    const ThisUser = await UserModel.findByPk(id);

    return ThisUser;
};