const db = require('../../database').getInstance();

module.exports = async (photo_path) => {
    const housePhotoModel = db.getModel('House_Photo');

    await housePhotoModel.create(photo_path);
};