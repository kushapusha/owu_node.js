const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const {users_id} = req.house;
        const {id: token_id} = req.user;

        if (+users_id !== token_id) {
            throw new Error('It is not your house')
        }

        await houseService.deleteHouseService({id});

        res.json('House was deleted');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

