const db = require('../../database').getInstance();

module.exports = async UserToCreate => {
    const UserModel = db.getModel('User');

    const user = await UserModel.create(UserToCreate);

    return user && user.dataValues;
};