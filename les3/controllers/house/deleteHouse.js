const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;

        await houseService.deleteHouseService(id);

        res.json('House was deleted');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

