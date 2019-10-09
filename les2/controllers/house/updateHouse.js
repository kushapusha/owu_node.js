const { provider } = require('../../database');

module.exports = async (req, res) => {

    const {id, city, street, rooms} = req.body;
    const query = `update house set city = '${city}', street = '${street}', rooms = '${rooms}' where id = ${id}`;
    
    await provider.promise().query(query);

    res.redirect('/houseUpdate');
};
