const { provider } = require('../../database');

module.exports = async (req, res) => {
    const {name, email, password} = req.body;
    const query = `insert into users(name, email, password) values ('${name}','${email}','${password}')`;

    await provider.promise().query(query);

    res.render('regist');
};
