const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const UserModel = db.getModel('User');

        let UserID = await UserModel.findByPk(id);

        if (!UserID) {
            throw new Error('No user with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};