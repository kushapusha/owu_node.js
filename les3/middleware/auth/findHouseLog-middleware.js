const {authService} = require('../../service');

module.exports = async (req, res , next) => {
    try {
        const {street} = req.body;

        const LoginHouse = await authService.findHouseLogService(street);

        if (!LoginHouse.length) {
            return res.redirect('/houses_register');
        }

        req.house = LoginHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};