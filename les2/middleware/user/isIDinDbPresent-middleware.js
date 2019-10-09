const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.body;
        const query = `select * from users where id = ${id}`;
        const [UserID] = await provider.promise().query(query);

        if (!UserID.length) {
            throw new Error('No user with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};