const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const query = `select * from users where id = ${id}`;
        const [ThisUser] = await provider.promise().query(query);

        if (!ThisUser.length) {
            return res.redirect('/regist');
        }

        [req.user] = ThisUser;
        next();
    } catch (e) {
       res.status(400).json(e.message)
    }
};