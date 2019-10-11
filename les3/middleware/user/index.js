const isUserPresentMiddleware = require('./isUserPresent-middleware');
const findUserLogMiddleware = require('./findUserLog-middleware');
const isIDinDbPresentMiddleware = require('./isIDinDbPresent-middleware');
const findAllUsersMiddleware = require('./findAllUsers-middleware');


module.exports = {
    isUserPresentMiddleware,
    findUserLogMiddleware,
    isIDinDbPresentMiddleware,
    findAllUsersMiddleware
};