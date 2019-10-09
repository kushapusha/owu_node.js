const { provider } = require('../../database');

module.exports = async (req, res , next) => {
    try {
        const {street} = req.body;
        const query = `select * from house where street = '${street}'`;
        const [LoginHouse] = await provider.promise().query(query);

        if (!LoginHouse.length) {
            return res.redirect('/house');
        }

        [req.house] = LoginHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};