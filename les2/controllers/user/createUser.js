const { provider } = require('../../database');

module.exports = async (req, res) => {
    const {name, email, password} = req.body;
    const query = `insert into users(name, email, password) values (?, ?, ?)`;

    await provider.promise().query(query, [name, email, password]);

    res.render('regist');
};