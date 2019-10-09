const { provider } = require('../../database');

module.exports = async (req, res ,next) => {
    try {
        const {email, password} = req.body;
        const query = `select * from users where email = '${email}' and password = '${password}'`;
        
        const [LoginUser] = await provider.promise().query(query);

        if (!LoginUser.length) {
            return res.redirect('/regist');
        }

        req.user = LoginUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
