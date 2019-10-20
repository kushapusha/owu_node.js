const {FILES_PARAMS} = require('../../constants');

module.exports = (req, res, next) => {
    req.photos = [];

    if (!req.files) {
        next()
    }

    const photos = Object.values(req.files);

    for (let i = 0; i < photos.length; i++) {
        const {mimetype, size} = photos[i];

        if (!FILES_PARAMS.PHOTO_MIMETYPES.includes(mimetype)) {
            next(new Error('Photo is incorrect'))
        }

        if (FILES_PARAMS.MAX_PHOTO_SIZE < size) {
            next(new Error('Photo is too large'))
        }

        req.photos.push(photos[i]);
    }

    next()
};