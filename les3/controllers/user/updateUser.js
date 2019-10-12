const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {id, name, email, password} = req.body;
        const UserModel = db.getModel('User');

        await UserModel.update({name, email, password},
            {where: {id}}
        );

        res.redirect('/users_update');
    } catch (e) {
        res.status(400).json(e.message)
    }
};


