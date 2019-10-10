const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    const UserToCreate = req.body;
    const UserModel = db.getModel('User');

    await UserModel.create(UserToCreate);

    res.render('regist');
};

