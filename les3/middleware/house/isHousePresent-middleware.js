const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const HouseModel = db.getModel('House');

        let ThisHouse = await  HouseModel.findByPk(id);

        if (!ThisHouse) {
            return res.redirect('/houses_register');
        }

        req.house = ThisHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};