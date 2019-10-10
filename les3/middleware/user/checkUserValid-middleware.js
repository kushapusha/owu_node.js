const { userValid } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        userValid.newUserValid(user);
        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};