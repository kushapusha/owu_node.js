const {userService, emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const UserToCreate = req.body;

        await userService.createUserService(UserToCreate);

        await emailService.sendEmailService(UserToCreate.email);

        res.json('user created');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

