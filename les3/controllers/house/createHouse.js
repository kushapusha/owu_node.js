const fs = require('fs-extra');
const {resolve} = require('path');

const {houseService, filesService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const HouseNew = req.body;
        const {id: users_id} = req.user;
        const photos = req.photos;
        const appRoot = global.appRoot;

        Object.assign(HouseNew, {users_id});

        const {id} = await houseService.createHouseService(HouseNew);
        const photoDir = `house/${id}/photo`;

        await fs.mkdirSync(resolve(appRoot, 'public', photoDir), {recursive: true});

        const uploadPhoto = photos.map(async photo =>  {
            const photoExtension = photo.name.split('.').pop();
            const photoName = `${Date.now()}.${photoExtension}`;

            await photo.mv(resolve(appRoot, 'public', photoDir, photoName));
            await filesService.uploadHousePhotosService({house_id: id, photo_path: `${photoDir}/${photoName}`});
        });

        await Promise.all(uploadPhoto);

        res.json('House was created');
    } catch (e) {
        res.status(400).json(e.message)
    }
};