const { provider } = require('../../database');

module.exports = async (req, res) => {
    const {city, street, rooms} = req.body;
    const query = `insert into house(city, street, rooms) values (?, ?, ?)`;

    await provider.promise().query(query, [city, street, rooms]);

    res.render('house');
};