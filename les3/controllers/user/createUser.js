const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const UserToCreate = req.body;

        await userService.createUserService(UserToCreate);

        res.render('regist');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

