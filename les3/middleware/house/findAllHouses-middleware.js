const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `select * from house`;

        const [AllHouses] = await provider.promise().query(query);

        if (!AllHouses.length) {
            return res.redirect('/house');
        }

        req.house = AllHouses;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};