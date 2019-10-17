const jwt = require('jsonwebtoken');

const {jwt_secret} = require('../config/config');

module.exports = token => {
    let user;

    jwt.verify(token, jwt_secret, (err, decoded) => {
        if (err) {
            throw new Error('Token is not valid!')
        }

        user = decoded;

    });

    return user;
};