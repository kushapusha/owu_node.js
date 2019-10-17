const db = require('../../database').getInstance();

module.exports = async (UserNew, id) => {
    const UserModel = db.getModel('User');

    await UserModel.update(UserNew,
        {where: {id}}
    );
};