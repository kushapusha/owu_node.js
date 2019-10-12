const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const UserNew = req.body;
        const UserModel = db.getModel('User');

        await UserModel.update(UserNew,
            {where: {id}}
        );

        res.json('User was updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};


