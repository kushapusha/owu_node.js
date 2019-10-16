const db = require('../../database').getInstance();

module.exports = async (id, UserNew) => {
    const UserModel = db.getModel('User');

    await UserModel.update(UserNew,
        {where: {id}}
    );
};