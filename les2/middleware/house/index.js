const isHousePresentMiddleware = require('./isHousePresent-middleware');
const checkHouseValidMiddleware = require('./checkHouseValid-middleware');
const findHouseLogMiddleware = require('./findHouseLog-middleware');
const isHouseIdInDbPresentMiddleware = require('./isHouseIdInDbPresent-middleware');
const findAllHousesMiddleware = require('./findAllHouses-middleware');



module.exports = {
    isHousePresentMiddleware,
    checkHouseValidMiddleware,
    findHouseLogMiddleware,
    isHouseIdInDbPresentMiddleware,
    findAllHousesMiddleware
};
