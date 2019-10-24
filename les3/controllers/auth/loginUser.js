const {tokinazer} = require('../../helpers');

const {notEmptyDataValidator} = require('../../validator');
const {authService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await authService.findUserLogService(email, password);

        notEmptyDataValidator(user);

        const tokens = tokinazer(user);

        res.json(tokens);
    } catch (e) {
        res.status(403).json(e.message)
    }
};