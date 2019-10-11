const db = require('../../database').getInstance();

module.exports = async (req, res , next) => {
    try {
        const {street} = req.body;
        const HouseModel = db.getModel('House');

        const LoginHouse = await HouseModel.findOne(
            {where:
                {street: `${street}`}
        });

        if (!LoginHouse) {
            return res.redirect('/houses_register');
        }

        req.house = LoginHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};