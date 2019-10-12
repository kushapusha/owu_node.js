const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const HouseNew = req.body;
        const HouseModel = db.getModel('House');

        await HouseModel.update(HouseNew,
            {where: {id}}
        );

        res.json('House was updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};