const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {id, city, street, rooms} = req.body;
        const HouseModel = db.getModel('House');

        await HouseModel.update({city, street, rooms},
            {where: {id}}
        );

        res.redirect('/houses_update');
    } catch (e) {
        res.status(400).json(e.message)
    }
};