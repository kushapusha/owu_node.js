const {tokinazer} = require('../../helpers');

module.exports = (req, res) => {
    const user = req.user;
    const tokens = tokinazer(user);

    res.json(tokens);
};