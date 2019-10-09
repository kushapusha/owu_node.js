const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const query = `select * from house where id = ${id}`;
        const [ThisHouse] = await provider.promise().query(query);

        if (!ThisHouse.length) {
            return res.redirect('/house');
        }

        req.house = ThisHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
