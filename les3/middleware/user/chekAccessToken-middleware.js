const {tokenVerification} = require('../../helpers');

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            throw  new Error('No token!!!')
        }

        const userFromToken = tokenVerification(token);

        req.user = userFromToken;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};