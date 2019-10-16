const db = require('../../database').getInstance();

module.exports = async (email, password) => {
    const UserModel = db.getModel('User');

    const LoginUser = await UserModel.findOne({
            where: {email, password}
        });

    return LoginUser && LoginUser.dataValues
};