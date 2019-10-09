const isHousePresentMiddleware = require('./isHousePresent-middleware');
const checkHouseValidMiddleware = require('./checkHouseValid-middleware');
const findHouseLogMiddleware = require('./findHouseLog-middleware');
const isHouseIdInDbPresentMiddleware = require('./isHouseIdInDbPresent-middleware');


module.exports = {
    isHousePresentMiddleware,
    checkHouseValidMiddleware,
    findHouseLogMiddleware,
    isHouseIdInDbPresentMiddleware
};