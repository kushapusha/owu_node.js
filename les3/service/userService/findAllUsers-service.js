const  db = require('../../database').getInstance();

module.exports = async () => {
    const UserModel = db.getModel('User');

    const AllUsers = await UserModel.findAll();

    return AllUsers;
};