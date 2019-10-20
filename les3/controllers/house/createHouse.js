const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid').v1();

const {houseService, filesService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const HouseNew = req.body;
        // const {id: users_id} = req.user;
        const photos = req.photos;
        const appRoot = global.appRoot;

        // Object.assign(HouseNew, {users_id});

        const {id} = await houseService.createHouseService(HouseNew);

        const photoDir = `house/${id}/photo`;
        await fs.mkdirSync(resolve(appRoot,'public', photoDir), {recursive: true});

        for (let i = 0; i < photos.length; i++) {
        const photoExtension = photos[i].name.split('.').pop();

        const photoName = `${uuid}.${photoExtension}`;

        await photos[i].mv(resolve(appRoot, 'public',photoDir, photoName));

        await filesService.uploadHousePhotosService({house_id: id, photo_path: `${photoDir}/${photoName}`});
            console.log(photos);
        }
        res.json('House was created');
    } catch (e) {
        res.status(400).json(e.message)
    }
};