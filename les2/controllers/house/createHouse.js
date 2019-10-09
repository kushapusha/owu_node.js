const { provider } = require('../../database');

module.exports = async (req, res) => {
    const {city, street, rooms} = req.body;
    const query = `insert into house(city, street, rooms) values ('${city}', '${street}', '${rooms}')`;

    await provider.promise().query(query);

    res.render('house');
};
