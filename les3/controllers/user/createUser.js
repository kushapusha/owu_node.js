const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const UserToCreate = req.body;
        const UserModel = db.getModel('User');

        await UserModel.create(UserToCreate);

        res.render('regist');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

