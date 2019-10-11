const isHousePresentMiddleware = require('./isHousePresent-middleware');
const findHouseLogMiddleware = require('./findHouseLog-middleware');
const isHouseIdInDbPresentMiddleware = require('./isHouseIdInDbPresent-middleware');
const findAllHousesMiddleware = require('./findAllHouses-middleware');



module.exports = {
    isHousePresentMiddleware,
    findHouseLogMiddleware,
    isHouseIdInDbPresentMiddleware,
    findAllHousesMiddleware
};