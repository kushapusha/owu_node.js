const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid').v1();

const {userService, emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const UserToCreate = req.body;
        const [photo] = req.photos;
        const appRoot = global.appRoot;

        const {id} = await userService.createUserService(UserToCreate);

        const photoDir = `user/${id}/photo`;
        const photoExtension = photo.name.split('.').pop();
        const photoName = `${uuid}.${photoExtension}`;

        await fs.mkdirSync(resolve(appRoot,'public', photoDir), {recursive: true});

        await photo.mv(resolve(appRoot, 'public',photoDir, photoName));

        await userService.updateUserService({photo_path: `${photoDir}/${photoName}`}, id);

        await emailService.sendEmailService(UserToCreate.email);

        res.json('user created');
    } catch (e) {
        res.status(400).json(e.message)
    }
};

