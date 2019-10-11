const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const UserModel = db.getModel('User');

        const AllUsers = await UserModel.findAll();

        if (!AllUsers) {
            return res.redirect('/regist');
        }

        req.user = AllUsers;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};