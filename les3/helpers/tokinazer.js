const jwt = require('jsonwebtoken');

const {jwt_secret, jwt_refresh} = require('../config/config');

module.exports = data => {
    const access_token = jwt.sign(data, jwt_secret, {expiresIn: '10m'});
    const refresh_token = jwt.sign({}, jwt_refresh, {expiresIn: '1h'});

    return {
        access_token,
        refresh_token
    }
};