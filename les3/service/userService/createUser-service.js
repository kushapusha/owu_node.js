const db = require('../../database').getInstance();

module.exports = async (UserToCreate) => {
    const UserModel = db.getModel('User');

    await UserModel.create(UserToCreate);
};