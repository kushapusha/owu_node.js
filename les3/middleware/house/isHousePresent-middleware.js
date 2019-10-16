const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const ThisHouse = await houseService.isHousePresentService(id);

        if (!ThisHouse) {
            return res.redirect('/houses_register');
        }

        req.house = ThisHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};