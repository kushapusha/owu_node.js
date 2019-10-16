const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;

        const houses = await userService.userWithHouseService(id);
        const user = await userService.isUserPresentService(id);

        user.houses = houses;

        res.json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
};