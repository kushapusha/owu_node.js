const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.body;
        const query = `select * from house where id = ${id}`;

        const [HouseID] = await provider.promise().query(query);

        if (!HouseID.length) {
            throw new Error('No house with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};