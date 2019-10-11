const db = require('../../database').getInstance();

module.exports = async (req, res ,next) => {
    try {
        const {email, password} = req.body;
        const UserModel = db.getModel('User');

        const LoginUser = await UserModel.findOne(
            {where: {
                email: `${email}`,
                password: `${password}`
            }
        });

        if (!LoginUser) {
            return res.redirect('/regist');
        }

        req.user = LoginUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};